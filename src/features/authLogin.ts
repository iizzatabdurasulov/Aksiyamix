import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthType = "login" | "codeVerification";

interface AuthStateDialog {
  activeDialog: AuthType; 
  phone: string;
}

const initialState: AuthStateDialog = {
  activeDialog: "login", 
  phone: ''
};

const authDialogSlice = createSlice({
  name: "authTabs",
  initialState,
  reducers: {
     setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    setactiveDialog: (state, action: PayloadAction<AuthType>) => {
      state.activeDialog = action.payload;
    },
  },
});

export const { setactiveDialog, setPhone } = authDialogSlice.actions;
export default authDialogSlice.reducer;
