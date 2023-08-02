import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import OrdersList from "./OrdersList";
import { Box, Button } from "@mui/material";

const DashboardContainer = () => {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState({});
  const [view, setView] = useState("products");
  const [orders, setOrders] = useState([]);

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
  useEffect(() => {
    const ordersCollection = collection(db, "orders");
    getDocs(ordersCollection).then((res) => {
      const arrayOrders = res.docs.map((order) => {
        return {
          ...order.data(),
          id: order.id,
        };
      });
      setOrders(arrayOrders);
    });
  }, []);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Button
          sx={{ width: "150px" }}
          variant={ view === "products" ? "contained" : "outlined"}
          onClick={() => setView("products")}
        >
          Productos
        </Button>
        <Button
          sx={{ width: "150px" }}
          variant={ view === "orders" ? "contained" : "outlined"}
          onClick={() => setView("orders")}
        >
          Compras
        </Button>
      </Box>
      {view === "products" && (
        <Dashboard
          products={products}
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          productSelected={productSelected}
          setProductSelected={setProductSelected}
        />
      )}
      {view === "orders" && <OrdersList orders={orders} />}
    </>
  );
};

export default DashboardContainer;
