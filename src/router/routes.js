import ForgotPassword from "../components/pages/forgotPassword/ForgotPassword";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "home",
    path: "/register",
    Element: Register,
  },
  {
    id: "login",
    path: "/login",
    Element: Login,
  },
  {
    id: "forgotPassword",
    path: "/forgot-password",
    Element: ForgotPassword,
  },
];
