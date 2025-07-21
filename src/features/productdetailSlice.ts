import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProductOptionsState {
  selectedColor: string | null;
  selectedMemory: string | null;
  isSwiperOpen: boolean;
  selectedSwiperProductId: string | null;
  quantity: number;
  discountAmount: number | null;
  promoInput: string;
}

const initialState: ProductOptionsState = {
  selectedColor: "black",
  selectedMemory: null,
  isSwiperOpen: false,
  selectedSwiperProductId: null,
  quantity: 1,
  discountAmount: null,
  promoInput: "",
};

const productOptionsSlice = createSlice({
  name: "productOptions",
  initialState,
  reducers: {
    setSelectedColor(state, action: PayloadAction<string>) {
      state.selectedColor = action.payload;
    },
    setSelectedMemory(state, action: PayloadAction<string>) {
      state.selectedMemory = action.payload;
    },
    setQuantitySelected(state, action: PayloadAction<number>) {
      state.quantity = action.payload;
    },
    setDiscountAmount(state, action: PayloadAction<number>) {
      state.discountAmount = action.payload;
    },
    setPromoInput(state, action: PayloadAction<string>) {
      state.promoInput = action.payload;
    },
    clearSelectedOptions(state) {
      state.selectedColor = null;
      state.selectedMemory = null;
    },

    openSwiper(state, action: PayloadAction<string>) {
      state.isSwiperOpen = true;
      state.selectedSwiperProductId = action.payload;
    },
    closeSwiper(state) {
      state.isSwiperOpen = false;
      state.selectedSwiperProductId = null;
    },
  },
});

export const {
  setSelectedColor,
  setSelectedMemory,
  clearSelectedOptions,
  openSwiper,
  closeSwiper,
  setQuantitySelected,
  setDiscountAmount,
  setPromoInput,
} = productOptionsSlice.actions;

export default productOptionsSlice.reducer;
