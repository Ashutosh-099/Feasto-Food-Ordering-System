import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItemInCart: (state, action) => {
            state.items.push(action.payload)
        },
        removeItemFromCart: (state) => {
            state.items.pop()
        },
        clearItemsFromCart: (state) => {
            state.items.length = 0
        }
    },
    selectors: {
        itemsCount: (state) => state.items.length
    }
});

export const { addItemInCart, removeItemFromCart, clearItemsFromCart } = cartSlice.actions;
export const { itemsCount } = cartSlice.selectors;

export default cartSlice.reducer;