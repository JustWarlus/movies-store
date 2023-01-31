import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE } from "router";
import { useAppSelector } from "store";

export const useNavigateAfterAuth = (path: PAGE) => {
  const isAuth = useAppSelector((state) => state.account.isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate(path);
    }
  }, [navigate, path, isAuth]);
};
