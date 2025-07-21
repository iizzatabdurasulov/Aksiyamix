// src/redux/slices/userInfoSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserInfoState {
  selectedMenu: number;
}

const initialState: UserInfoState = {
  selectedMenu:1
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setSelectedMenu(state, action: PayloadAction<number>) {
      state.selectedMenu = action.payload;
    },
  },
});

export const { setSelectedMenu } = userInfoSlice.actions;
export default userInfoSlice.reducer;
