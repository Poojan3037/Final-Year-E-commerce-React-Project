import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice";
import cartSlice from "./slices/CartSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
