import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserType = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  yourName: string | null;
  birthDate: string | null;
  surname: string | null;
  address: string | null;
  phoneNumber: string | null;
  gender: string | null;
};

type AuthState = {
  user: UserType | null;
};

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType | null>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
