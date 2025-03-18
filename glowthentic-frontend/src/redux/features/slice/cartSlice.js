// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLocalStorage, saveCartToLocalStorage } from '../../../utils/localstorage';

// Initial state
const initialState = {
  cartItems: getCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      saveCartToLocalStorage(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload);
      saveCartToLocalStorage(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cartItems');
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find(cartItem => cartItem.id === itemId);
      if (item) {
        item.quantity += 1;
        saveCartToLocalStorage(state.cartItems);
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find(cartItem => cartItem.id === itemId);
      if (item && item.quantity > 1) { // Minimum quantity is 1
        item.quantity -= 1;
        saveCartToLocalStorage(state.cartItems);
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;