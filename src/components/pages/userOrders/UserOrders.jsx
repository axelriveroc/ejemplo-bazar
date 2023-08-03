import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const UserOrders = () => {
  const { user } = useContext(AuthContext);

  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    const ordersCollection = collection(db, "orders");
    const q = query(ordersCollection, where("email", "==", user.email));
    getDocs(q).then((res) => {
      const arrayOrders = res.docs.map((order) => {
        return {
          ...order.data(),
          id: order.id,
        };
      });
      setMyOrders(arrayOrders);
    });
  }, [user.email]);
  return (
    <div>
      <Box>
        <Typography variant="h4" color={"primary"}>
          Mis compras
        </Typography>
        {myOrders.map((order) => {
          return (
            <div key={order.id} style={{border: "2px solid black"}}>
              <h3>Numero de orden: {order.id}</h3>
              <div>Fecha: <h6>{order.date.toDate().toLocaleString()}</h6> </div>
              <h4>Productos: </h4>
              {order.items.map((product) => {
                return (
                  <div key={product.id}>
                    <h6>{product.title}</h6>
                    <h6>Precio unitario {product.unit_price}</h6>
                    <h6>Cantidad: {product.quantity}</h6>
                  </div>
                );
              })}
            </div>
          );
        })}
      </Box>
    </div>
  );
};

export default UserOrders;
