import { Box, Button, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
const Cart = ({ cart, deleteById, navigate, total }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Carrito</h1>
        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            minHeight: "50vh",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {cart.map((product) => {
            return (
              <Box
                key={product.id}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={product.image}
                  alt=""
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/productDetail/${product.id}`)}
                />
                <h5>{product.title}</h5>
                <h5>Cantidad:{product.quantity}</h5>
                <h5>${product.unit_price}</h5>
                <IconButton onClick={() => deleteById(product.id)}>
                  <DeleteForeverIcon color="primary" />
                </IconButton>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            backgroundColor: "whitesmoke",
            width: { xs: "100%", md: "30%" },
            minHeight: "20vh",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <h3>Resumen</h3>
          <h4>Total productos: ${total}.- </h4>
          <h4>Envio: {"$7"}</h4>
          <h4>Total final con envio: ${total + 7}</h4>
        </Box>
      </Box>
    </div>
  );
};

export default Cart;
