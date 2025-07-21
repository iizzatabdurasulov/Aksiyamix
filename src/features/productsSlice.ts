import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";
import type { IProduct } from "@/types";

interface ProductsState {
  allProducts: IProduct[];
  bestAds: IProduct[];
  discountNearby: IProduct[];
  discountStartAnnouncement: IProduct[];
  lastViewedAds: IProduct[];
  stoppedAds: IProduct[];
  forYou: IProduct[];
  similarProducts: IProduct[]
}

const initialState: ProductsState = {
  allProducts: [],
  bestAds: [],
  discountNearby: [],
  discountStartAnnouncement: [],
  lastViewedAds: [],
  stoppedAds: [],
  forYou: [],
  similarProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.allProducts = action.payload;
    },
    setBestAds: (state, action: PayloadAction<IProduct[]>) => {
      state.bestAds = action.payload;
    },
    setDiscountNearby: (state, action: PayloadAction<IProduct[]>) => {
      state.discountNearby = action.payload;
    },
    setDiscountStartAnnouncement: (state, action: PayloadAction<IProduct[]>) => {
      state.discountStartAnnouncement = action.payload;
    },
    setLastViewedAds: (state, action: PayloadAction<IProduct[]>) => {
      state.lastViewedAds = action.payload;
    },
    setStoppedAds: (state, action: PayloadAction<IProduct[]>) => {
      state.stoppedAds = action.payload;
    },
    setForYou: (state, action: PayloadAction<IProduct[]>) => {
      state.forYou = action.payload;
    },
    setSimilarProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.similarProducts = action.payload;
    },
  },
});

export const {
  setAllProducts,
  setBestAds,
  setDiscountNearby,
  setDiscountStartAnnouncement,
  setLastViewedAds,
  setStoppedAds,
  setForYou,
  setSimilarProducts
} = productsSlice.actions;

// Selectors
export const selectAllProducts = (state: RootState) => state.products.allProducts;
export const selectBestAds = (state: RootState) => state.products.bestAds;
export const selectDiscountNearby = (state: RootState) => state.products.discountNearby;
export const selectDiscountStartAnnouncement = (state: RootState) =>
  state.products.discountStartAnnouncement;
export const selectLastViewedAds = (state: RootState) => state.products.lastViewedAds;
export const selectStoppedAds = (state: RootState) => state.products.stoppedAds;
export const selectForYou = (state: RootState) => state.products.forYou;
export const selectSimilarProducts = (state: RootState) => state.products.similarProducts;

export default productsSlice.reducer;
