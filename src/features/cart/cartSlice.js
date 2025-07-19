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
        },
        removeItem(state, action) {
            state.cart = state.cart.filter(
                (item) => item.pizzaId !== action.payload
            );
        },
        decreaseItemQuantity(state, action) {
            const pizza = state.cart.find(
                (item) => item.pizzaId === action.payload
            );

            pizza.quantity--;
            pizza.totalPrice = pizza.quantity * pizza.unitPrice;

            if (pizza.quantity < 1)
                cartSlice.caseReducers.removeItem(state, action);
        },
        increaseItemQuantity(state, action) {
            const pizza = state.cart.find(
                (item) => item.pizzaId === action.payload
            );

            pizza.quantity++;
            pizza.totalPrice = pizza.quantity * pizza.unitPrice;
        },
        clearCart(state) {
            state.cart = [];
        }
    }
});

// SELECTORS
export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getCurrentPizzaQuantity = (id) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity || 0;

// ACTIONS
export const {
    addItem,
    removeItem,
    decreaseItemQuantity,
    increaseItemQuantity,
    clearCart
} = cartSlice.actions;

// REDUCER
export default cartSlice.reducer;
