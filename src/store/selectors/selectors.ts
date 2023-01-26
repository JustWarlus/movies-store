import { RootState } from "store/store";

const accountSelector = (state: RootState) => state.account;
const isAuthSelector = (state: RootState) => state.account.isAuth;

export { accountSelector, isAuthSelector };
