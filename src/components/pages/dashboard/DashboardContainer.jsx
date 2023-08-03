import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import OrdersList from "./OrdersList";
import { Box, Button } from "@mui/material";
import ProductsList from "./ProductsList";

const DashboardContainer = () => {
  const [view, setView] = useState("products");
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  // TRAEMOS LA LISTA DE PRODUCTOS
  useEffect(() => {
    let productsRef = collection(db, "products");

    getDocs(productsRef).then((res) => {
      let arrProducts = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setProducts(arrProducts);
    });
  }, []);
  // TRAEMOS LA LISTA DE COMPRAS
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
          variant={view === "products" ? "contained" : "outlined"}
          onClick={() => setView("products")}
        >
          Productos
        </Button>
        <Button
          sx={{ width: "150px" }}
          variant={view === "orders" ? "contained" : "outlined"}
          onClick={() => setView("orders")}
        >
          Compras
        </Button>
      </Box>
      {view === "products" && <ProductsList products={products} />}
      {view === "orders" && <OrdersList orders={orders} />}
    </>
  );
};

export default DashboardContainer;
