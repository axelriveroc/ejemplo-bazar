import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, deleteById } = useContext(CartContext);
  const navigate = useNavigate();
  return <Cart cart={cart} deleteById={deleteById} navigate={navigate} />;
};

export default CartContainer;
