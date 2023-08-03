import CartContainer from "../components/pages/cart/CartContainer";
import Checkout from "../components/pages/checkout/Checkout";
import Home from "../components/pages/home/Home";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import ProductListContainer from "../components/pages/productList/ProductListContainer";
import UserOrders from "../components/pages/userOrders/UserOrders";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "shop",
    path: "/shop",
    Element: ProductListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ProductListContainer,
  },
  {
    id: "productDetail",
    path: "/productDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: Checkout,
  },
  {
    id: "userOrders",
    path: "/user-orders",
    Element: UserOrders,
  },
];
