import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Success = ({ orderId }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: { xs: "90%", md: "40%" },
          minHeight: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
          boxShadow: "0 0 15px 2px steelblue"
        }}
      >
        <Typography color={"primary"} variant="h4" align="center" fontWeight={"bold"}>
          Gracias por tu compra!
        </Typography>
        <Typography variant="h6" align="center" color={"primary"}>
          Tu numero de orden es <span style={{ color: "peru" }}>{orderId}</span>
        </Typography>
        <Typography variant="h6" align="center" color={"primary"}>
        Podras ver toda la informacion de tus compras desde la pestaña Mis
          compras.
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center", gap: "20px", flexDirection: {xs: "column", sm: "row"}}}>
          <Link to={"/shop"}>
            <Button variant="contained" sx={{width: "200px"}}>Seguir comprando</Button>
          </Link>
          <Link to={"/user-orders"}>
            <Button variant="contained" sx={{width: "200px"}}>Mis compras</Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Success;
