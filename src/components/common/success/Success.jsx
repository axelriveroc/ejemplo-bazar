import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Success = ({ orderId }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box style={{ border: "2px solid red", width: { xs: "90%", sm: "40%" } }}>
        <h3>Gracias por tu compra!</h3>
        <h4>
          Tu numero de orden es <span style={{ color: "peru" }}>{orderId}</span>{" "}
          por favor guarda este numero que te servira para hacer seguimiento de
          tu pedido
        </h4>
        <Link to={"/"}>Aceptar</Link>
      </Box>
    </div>
  );
};

export default Success;
