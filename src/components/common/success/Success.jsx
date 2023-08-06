import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Success = ({ orderId }) => {
  
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box style={{ border: "2px solid red", width: { xs: "90%", sm: "40%" } }}>
        <h3>Gracias por tu compra!</h3>
        <h4>
          Tu numero de orden es <span style={{ color: "peru" }}>{orderId}</span>{" "}
          Podras ver toda la informacion de tus compras desde la pestaña Mis compras.
        </h4>
        <Link to={"/"}>Aceptar</Link>
        <Link to={"/user-orders"}>Ir a Mis compras</Link>
      </Box>
    </div>
  );
};

export default Success;
