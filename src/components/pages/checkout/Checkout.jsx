import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useLocation } from "react-router-dom";
import Success from "../../common/success/Success";

const Checkout = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null);

  const [pagando, setPagando] = useState(false);

  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago(import.meta.env.VITE_PUBLICKEY, { locale: "es-AR" });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const total = getTotalPrice();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("status");

  useEffect(() => {
    let order = JSON.parse(localStorage.getItem("order"));
    if (paramValue === "approved" && order.name) {
      let ordersCollections = collection(db, "orders");
      addDoc(ordersCollections, { ...order, date: serverTimestamp() }).then(
        (res) => {
          setOrderId(res.id);
        }
      );
      order.items.forEach((elemento) => {
        updateDoc(doc(db, "products", elemento.id), {
          stock: elemento.stock - elemento.quantity,
        });
      });
      localStorage.removeItem("order");
      localStorage.removeItem("cart");
    }
  }, [paramValue]);

  const createPreference = async () => {
    const newArr = cart.map((product) => {
      return {
        title: product.title,
        unit_price: product.unit_price,
        quantity: product.quantity,
      };
    });

    try {
      const response = await axios.post(
        "http://localhost:8080/create_preference",
        newArr
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    let order = {
      name: userData.name,
      email: userData.email,
      items: cart,
      total,
    };
    localStorage.setItem("order", JSON.stringify(order));
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div>
      {!pagando && !orderId && (
        <div>
          <input
            type="text"
            placeholder="ingrese su nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="ingrese su email"
            name="email"
            onChange={handleChange}
          />
          <button onClick={handleBuy}>Seleccione metodo de pago</button>
        </div>
      )}

      {preferenceId && (
        <Wallet
          initialization={{ preferenceId }}
          onReady={() => setPagando(true)}
        />
      )}
      {orderId && <Success orderId={orderId} />}
    </div>
  );
};

export default Checkout;
