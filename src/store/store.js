import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer       // Name is important, as we can access specific state using this name
    }
});