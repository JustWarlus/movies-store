import { Navigate, Outlet } from "react-router-dom";
import { PAGE } from "router";
import { useAppSelector } from "store";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector((state) => state.account);

  return isAuth ? <Outlet /> : <Navigate to={PAGE.AUTHORIZATION} />;
};
