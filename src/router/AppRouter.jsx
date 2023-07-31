import { Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/navbar/Navbar";
import { routes } from "./routes";
import Login from "../components/pages/login/Login";
import RoutesManageUsers from "./RoutesManageUsers";
import DashboardContainer from "../components/pages/dashboard/DashboardContainer";
import RoutesManageAdmin from "./RoutesManageAdmin";
import Register from "../components/pages/register/Register";
import ForgotPassword from "../components/pages/forgotPassword/ForgotPassword";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<RoutesManageUsers />}>
        <Route element={<Navbar />}>
          {routes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
      </Route>

      <Route element={<RoutesManageAdmin />}>
        <Route element={<Navbar />}>
          <Route path="/dashboard" element={<DashboardContainer />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />

      {/* register  */}
      <Route path="/register" element={<Register />} />

      {/* forgot password  */}
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
