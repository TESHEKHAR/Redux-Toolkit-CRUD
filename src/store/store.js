import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../redux/productsSlice"; 
import categorySlice from "../redux/categorySlice"// Adjust path as needed

const store = configureStore({
  reducer: {
    products: productsSlice,
    category: categorySlice,
  },
});

export default store;