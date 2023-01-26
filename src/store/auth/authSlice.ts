import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { FirebaseErrorCode, getFBErrorMessage } from "utilits";

interface IAccount {
  id: null | string;
  name: null | string;
  email: null | string;
  token: null | string;
  avatar: null | string;
  isAuth: boolean;
  error: null | string;
}

const initialState: IAccount = {
  id: null,
  name: null,
  email: null,
  token: null,
  avatar: null,
  isAuth: false,
  error: null,
};

export const signUpUser = createAsyncThunk<
  { userEmail: string | null },
  { email: string; password: string },
  { rejectValue: string }
>("user/signUpUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email;
    return { userEmail };
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

export const updateUserEmail = createAsyncThunk<void, { email: string }, { rejectValue: string }>(
  "user/updateUserEmail",
  async ({ email }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      user && (await updateEmail(user, email));
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };
      return rejectWithValue(getFBErrorMessage(firebaseError.code));
    }
  },
);

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
    },

    getUserInfo: (state, { payload }) => {
      state.name = payload;
      state.email = payload;
      state.avatar = payload;
      state.token = payload;
      state.isAuth = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(signUpUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.email = payload.userEmail;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
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

export const { logOutUser, getUserInfo } = accountSlice.actions;
