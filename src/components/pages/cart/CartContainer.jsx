import { useContext, useEffect, useState } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "@firebase/firestore";

const CartContainer = () => {
  const { cart, deleteById, getTotalPrice } = useContext(CartContext);
  const total = getTotalPrice();
  const navigate = useNavigate();
  const [shipmentCost, setShipmentCost] = useState(null)
  useEffect(()=>{
    let refCollection = collection(db, "shipments")
    let refDoc = doc(refCollection, "mbPzY8utYEsVzUxFahJz")
    getDoc(refDoc).then(res=> setShipmentCost(res.data().cost))
  },[])
  return (
    <>
      {cart.length > 0 ? (
        <Cart
          cart={cart}
          deleteById={deleteById}
          navigate={navigate}
          total={total}
          shipmentCost={shipmentCost}
        />
      ) : (
        <div>
          <h2>Todavia no tienes nada en el carrito!</h2>
          <Link to="/shop">Ir a la tienda</Link>
        </div>
      )}
    </>
  );
};

export default CartContainer;
