import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/authSlice";
import userInfoReducer from "@/features/userInfoSlice";
import favoritesReducer from "@/features/favoritesSlice";
import authLoginReducer from "@/features/authLogin";
import productsreducer from '@/features/productsSlice'
import productdetailreducer from '@/features/productdetailSlice'
import sectionStateReducer from '@/features/sectionSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    sectionState: sectionStateReducer,
    userInfo: userInfoReducer,
    favorites: favoritesReducer,
    authLogin: authLoginReducer,
    products: productsreducer,
    productDetail: productdetailreducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
