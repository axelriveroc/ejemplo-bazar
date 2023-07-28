import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ProductDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  return <ProductDetail product={product} />;
};

export default ProductDetailContainer;
