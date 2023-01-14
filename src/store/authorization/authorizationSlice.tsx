import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  email: string | null;
  name: string | null;
  password: string | null;
}

interface IAuth {
  isAuth: boolean;
  user: IUser | null;
}

const initialState: IAuth = {
  isAuth: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});
