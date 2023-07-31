import { Navigate, Outlet } from "react-router-dom";

const RoutesManageUsers = () => {
  const isLogged = false;
  return <>{isLogged ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default RoutesManageUsers;
