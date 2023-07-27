import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import ProductList from "./ProductList";
import { getDocs, collection } from "firebase/firestore";

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [category, setCategory] = useState("all")

  useEffect(() => {
    let productsRef = collection(db, "products");

    getDocs(productsRef).then((res) => {
      let arrProducts = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setProducts(arrProducts);
    });
    console.log("se hace la peticion")
  }, []);

  const filterByCategory = (category) => {
    let arrayFiltered = products.filter(
      (product) => product.category === category
    );
    setProductsByCategory(arrayFiltered);
    setCategory(category)
  };

  return (
    <ProductList
      products={productsByCategory.length > 0 ? productsByCategory : products}
      filterByCategory={filterByCategory}
      category={category}
    />
  );
};

export default ProductListContainer;
