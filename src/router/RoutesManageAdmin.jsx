import { Navigate, Outlet } from "react-router-dom";

const RoutesManageAdmin = () => {
  const userRol = "admin";
  return <>{userRol === "admin" ? <Outlet /> : <Navigate to="/" />}</>;
};

export default RoutesManageAdmin;
