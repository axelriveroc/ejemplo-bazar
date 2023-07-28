import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import ProductListContainer from "../components/pages/productList/ProductListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "login",
    path: "/login",
    Element: Login,
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
];
