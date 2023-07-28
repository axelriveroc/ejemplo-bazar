import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { useContext, useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";

const ProductDetailContainer = () => {
  const { id } = useParams();
  const { getQuantityById, addToCart } = useContext(CartContext);
  const initial = getQuantityById(id);
  console.log(initial);
  const [product, setProduct] = useState({});
  const [counter, setCounter] = useState(initial || 1);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  const onAdd = () => {
    let productAdd = {
      ...product,
      quantity: counter,
    };
    addToCart(productAdd);
  };
  function addOne() {
 
    if (product.stock > counter) {
      setCounter(counter + 1);
    }
  }
  function subOne() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  return (
    <ProductDetail
      product={product}
      onAdd={onAdd}
      addOne={addOne}
      subOne={subOne}
      counter={counter}
      initial={initial}
    />
  );
};

export default ProductDetailContainer;
