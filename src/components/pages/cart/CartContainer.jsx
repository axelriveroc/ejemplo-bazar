import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, deleteById, getTotalPrice } = useContext(CartContext);
  const total = getTotalPrice()
  const navigate = useNavigate();
  return <Cart cart={cart} deleteById={deleteById} navigate={navigate} total={total}/>;
};

export default CartContainer;
