import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "@/types";

interface FavoritesState {
  items: IProduct[];
  selectedFavorite: IProduct | null;
}

const initialState: FavoritesState = {
  items: [],
  selectedFavorite: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<IProduct>) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (state.selectedFavorite?.id === action.payload) {
        state.selectedFavorite = null;
      }
    },
    setSelectedFavorite: (state, action: PayloadAction<IProduct>) => {
      state.selectedFavorite = action.payload;
    },
    clearSelectedFavorite: (state) => {
      state.selectedFavorite = null;
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  setSelectedFavorite,
  clearSelectedFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
