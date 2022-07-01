
import { createSlice } from "@reduxjs/toolkit";

const cartUiSlide = createSlice({
    name: "cartUi",
    initialState: { cartIsVisible: false},

    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        },
    },
});

export const cartUiActions = cartUiSlide.actions;
export default cartUiSlide;