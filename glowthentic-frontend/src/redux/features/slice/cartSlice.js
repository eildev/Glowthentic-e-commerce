// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLocalStorage, saveCartToLocalStorage } from '../../../utils/localstorage';

// Initial state
const initialState = {
  cartItems: getCartFromLocalStorage(), // Local storage থেকে ডেটা লোড
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1; // পণ্যের পরিমাণ বৃদ্ধি করুন
      } else {
        state.cartItems.push({ ...item, quantity: 1 }); // নতুন পণ্য যোগ করুন
      }

      // Local storage-এ আপডেট করা
      saveCartToLocalStorage(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload);

      // Local storage-এ আপডেট করা
      saveCartToLocalStorage(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cartItems'); // Local storage থেকে কার্ট ডেটা মুছুন
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
