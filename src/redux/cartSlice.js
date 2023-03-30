import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("cart")) || [],
  allPrice: JSON.parse(localStorage.getItem("cart")) || 0,
  totalQuantity: JSON.parse(localStorage.getItem("cart")) || 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      let tongtien = 0;
      const findEx = state.value.find((item) => item.id === action.payload.id);
      if (findEx) {
        state.value = state.value.map((item) => {
          return item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
                totalPrice:
                  (item.quantity + action.payload.quantity) * item.price,
              }
            : item;
        });
      } else {
        state.value.push(action.payload);
      }
      state.totalQuantity += 1;
      state.value.forEach((item) => (tongtien += item.totalPrice));
      state.allPrice = tongtien;
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    updateCart: (state, action) => {
      let tongtien = 0;
      const findEx = state.value.find((item) => item.id === action.payload.id);
      if (findEx) {
        state.value = state.value.map((item) => {
          return item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              }
            : item;
        });
      }
      state.value.forEach((item) => (tongtien += item.totalPrice));
      state.allPrice = tongtien;
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    deleteCart: (state, action) => {
      let tongtien = 0;
      state.value = state.value.filter((item) => item.id !== action.payload);
      state.totalQuantity -= 1;
      state.value.forEach((item) => (tongtien += item.totalPrice));
      state.allPrice = tongtien;
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    deleteOneCart: (state, action) => {
      let tongtien = 0;
      const findEx = state.value.find((item) => item.id === action.payload.id);
      if (findEx) {
        state.value = state.value.map((item) => {
          return item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: (item.quantity - 1) * item.price,
              }
            : item;
        });
      }
      state.value.forEach((item) => (tongtien += item.totalPrice));
      state.allPrice = tongtien;
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addCart, deleteCart, updateCart, deleteOneCart } = actions;
export default reducer;
