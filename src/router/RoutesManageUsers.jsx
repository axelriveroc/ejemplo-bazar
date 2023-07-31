import { Navigate, Outlet } from "react-router-dom";

const RoutesManageUsers = () => {
  const isLogged = true;
  return <>{isLogged ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default RoutesManageUsers;
