import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../redux/productsSlice"; 
import categorySlice from "../redux/categorySlice"

const store = configureStore({
  reducer: {
    products: productsSlice,
    category: categorySlice,
  },
});

export default store;