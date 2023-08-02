import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const DashboardContainer = () => {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = (product) => {
    setProductSelected(product);
    setOpen(true);
  };
  const handleClose = () => {
    setProductSelected({});
    setOpen(false);
  };
  useEffect(() => {
    let productsRef = collection(db, "products");

    getDocs(productsRef).then((res) => {
      let arrProducts = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setProducts(arrProducts);
    });
  }, []);
  return (
    <Dashboard
      products={products}
      open={open}
      handleClose={handleClose}
      handleOpen={handleOpen}
      productSelected={productSelected}
      setProductSelected={setProductSelected}
    />
  );
};

export default DashboardContainer;
