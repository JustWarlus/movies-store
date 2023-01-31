import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { LocalStorageKey } from "types";
import { FirebaseErrorCode, getFBErrorMessage } from "utilits";

interface IInitAuth {
  isAuth: boolean;
  userEmail: null | string;
}

const initAuth = (): IInitAuth => {
  if (!localStorage.getItem(LocalStorageKey.AUTH)) {
    localStorage.setItem(LocalStorageKey.AUTH, JSON.stringify({ isAuth: false, userEmail: null }));
  }
  return JSON.parse(localStorage.getItem(LocalStorageKey.AUTH) as string);
};

interface IAccount {
  id: null | string;
  name: null | string;
  email: null | string;
  token: null | string;
  avatar: null | string;
  isAuth: boolean;
  error: null | string;
  theme: string;
}

const initialState: IAccount = {
  id: null,
  name: null,
  email: initAuth().userEmail,
  token: null,
  avatar: null,
  isAuth: initAuth().isAuth,
  error: null,
  theme: "dark",
};

export const signUpUser = createAsyncThunk<
  { userEmail: string | null; userName: string },
  { email: string; password: string; userName: string },
  { rejectValue: string }
>("user/signUpUser", async ({ userName, email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = createUserWithEmailAndPassword(auth, email, password);
    const userEmail = (await userCredential).user.email;
    localStorage.setItem(LocalStorageKey.AUTH, JSON.stringify({ isAuth: true, userEmail: email }));
    return { userEmail, userName };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

export const signInUser = createAsyncThunk<
  { userEmail: string | null },
  { email: string; password: string },
  { rejectValue: string }
>("user/signInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email;
    localStorage.setItem(LocalStorageKey.AUTH, JSON.stringify({ isAuth: true, userEmail: email }));
    return { userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

export const resetUserPassword = createAsyncThunk<void, { email: string }, { rejectValue: string }>(
  "user/resetUserPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };
      return rejectWithValue(getFBErrorMessage(firebaseError.code));
    }
  },
);

export const updateUserPassword = createAsyncThunk<
  void,
  { newPassword: string },
  { rejectValue: string }
>("user/updateUserPassword", async ({ newPassword }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    user && (await updatePassword(user, newPassword));
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

export const updateUserEmail = createAsyncThunk<
  void,
  { userEmail: string },
  { rejectValue: string }
>("user/updateUserEmail", async ({ userEmail }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    user && (await updateEmail(user, userEmail));
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isAuth = true;
    },

    logOutUser: (state) => {
      state.isAuth = false;
      localStorage.setItem(
        LocalStorageKey.AUTH,
        JSON.stringify({ isAuth: false, userEmail: null }),
      );
    },

    getUserInfo: (state, { payload }) => {
      state.name = payload;
      state.email = payload;
      state.avatar = payload;
      state.token = payload;
      state.isAuth = payload;
    },
    setThemesDark(state) {
      state.theme = "dark";
      const htmlteg = document.documentElement;
      htmlteg.setAttribute("theme", "dark");
    },
    setThemesLight(state) {
      state.theme = "light";
      const htmlteg = document.documentElement;
      htmlteg.setAttribute("theme", "light");
    },
  },
  extraReducers(builder) {
    builder.addCase(signUpUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.userName;
      state.email = payload.userEmail;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
      }
    });

    builder.addCase(resetUserPassword.pending, (state) => {
      state.error = null;
    });
    builder.addCase(resetUserPassword.fulfilled, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(resetUserPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      }
    });

    builder.addCase(updateUserEmail.pending, (state) => {
      state.error = null;
    });
    builder.addCase(updateUserEmail.fulfilled, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(updateUserEmail.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      }
    });

    builder.addCase(updateUserPassword.pending, (state) => {
      state.error = null;
    });
    builder.addCase(updateUserPassword.fulfilled, (state) => {
      state.error = null;
    });
    builder.addCase(updateUserPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      }
    });

    builder.addCase(signInUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signInUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.email = payload.userEmail;
      state.error = null;
    });
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
      }
    });
  },
});

export default accountSlice.reducer;

export const { logOutUser, getUserInfo, setThemesDark, setThemesLight } = accountSlice.actions;
