/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Adds the plant, or bumps quantity by 1 if that plant is already in the cart.
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((entry) => entry.name === item.name);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // Removes the whole line for that plant.
    removeItem: (state, action) => {
      state.items = state.items.filter((entry) => entry.name !== action.payload.name);
    },

    // Sets an explicit quantity; drops the line when it reaches 0.
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((entry) => entry.name === name);

      if (!item) return;

      if (quantity <= 0) {
        state.items = state.items.filter((entry) => entry.name !== name);
      } else {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
// Exports both the reducer and the action creators from one module, which the
// react-refresh rule flags because it expects component-only files.
