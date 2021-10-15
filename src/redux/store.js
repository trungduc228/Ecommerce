import { configureStore } from "@reduxjs/toolkit";
import cartItemSlide from "./shoppingCart/cartItemSlide";
export const store = configureStore({
    reducer: {
        cartItemSlide: cartItemSlide
    }
})