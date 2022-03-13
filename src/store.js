import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store;