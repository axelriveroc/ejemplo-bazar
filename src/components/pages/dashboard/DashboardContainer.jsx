import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import OrdersList from "./OrdersList";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import ProductsList from "./ProductsList";

const DashboardContainer = () => {
  const [view, setView] = useState("products");
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [shipmentCost, setShipmentCost] = useState(null)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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

  // MANEJO COSTO DE ENVIO 
  const handleShipmentCost = (e)=>{
    e.preventDefault()
    const shipmentCollection = collection(db, "shipments")
    updateDoc(doc(shipmentCollection, "mbPzY8utYEsVzUxFahJz"), {cost: +shipmentCost}).then(() => {
      handleClose();
    });
  }
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
        <Button
          sx={{ width: "200px" }}
          variant={"outlined"}
          onClick={handleOpen}
        >
          Costo de envio
        </Button>
      </Box>
      {view === "products" && <ProductsList products={products} />}
      {view === "orders" && <OrdersList orders={orders} />}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" color={"primary"} align="center">
            ¿Quieres modificar el costo de envio?
          </Typography>
          <form onSubmit={handleShipmentCost}>
            <TextField  label="Nuevo costo de envio" fullWidth onChange={(e)=>setShipmentCost(e.target.value)}/>
            <Button type="submit" fullWidth variant="contained" sx={{marginTop: "10px"}}>Modificar</Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default DashboardContainer;
