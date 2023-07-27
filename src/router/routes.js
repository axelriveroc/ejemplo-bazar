import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import ProductListContainer from "../components/pages/productList/ProductListContainer";

export const routes = [
    {
        id:"home",
        path:"/",
        Element: Home
    },
    {
        id:"login",
        path:"/login",
        Element: Login
    },
    {
        id:"shop",
        path:"/shop",
        Element: ProductListContainer
    },
    {
        id:"categories",
        path:"/category/:categoryName",
        Element: ProductListContainer
    },
]