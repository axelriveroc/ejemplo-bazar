import { Badge, Box } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  console.log("se ejecuta widget");
  return (
    <Link to="/cart">
      <Box
        sx={{
          position: "fixed",
          right: { xs: "2px", sm: "40px" },
          top: "80px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid steelblue",
          backgroundColor: "white"
        }}
      >
        <Badge badgeContent={total} color="primary">
          <ShoppingCartCheckoutIcon
            color={"primary"}
            sx={{ fontSize: { xs: "25px", md: "35px" } }}
          />
        </Badge>
      </Box>
    </Link>
  );
};

export default CartWidget;
