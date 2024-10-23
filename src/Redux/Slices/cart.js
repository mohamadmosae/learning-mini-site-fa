import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { addedToCart: 0, addedtoProduct: [], total: 0},
  reducers: {
    addToCart: (state, action) => {
        state.addedtoProduct = [...state.addedtoProduct, action.payload];
        state.addedToCart = state.addedtoProduct.length;
        state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      
      state.addedtoProduct= state.addedtoProduct.filter(item=>(item.id!==action.payload.id))
      state.addedToCart = state.addedtoProduct.length;
      state.total -= action.payload.price;

    },
  },
});

export default cartSlice.reducer;
export const { removeFromCart, addToCart } = cartSlice.actions;
