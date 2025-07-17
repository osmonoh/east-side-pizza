import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload);
        }
    }
});

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getCurrentPizzaQuantity = (id) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity || 0;

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
