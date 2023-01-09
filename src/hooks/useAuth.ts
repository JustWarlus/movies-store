import { useAppSelector } from "./reduxHooks";

export const useAuth = () => {
  const { email, name } = useAppSelector((state) => state.user);

  return {
    isAuth: !!name,
    email,
    name,
  };
};
