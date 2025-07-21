import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SectionState {
  selectedTitle: string;
}

const initialState: SectionState = {
  selectedTitle: "",
};

const sectionSlice = createSlice({
  name: "sectionState",
  initialState,
  reducers: {
    setSelectedTitle: (state, action: PayloadAction<string>) => {
      state.selectedTitle = action.payload;
    },
  },
});

export const { setSelectedTitle } = sectionSlice.actions;
export const selectSelectedTitle = (state: any) => state.sectionState.selectedTitle;
export default sectionSlice.reducer;
