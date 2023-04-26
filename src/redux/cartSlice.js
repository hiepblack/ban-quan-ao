import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  allPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      let tongtien = 0;
      const findEx = state.value.find((item) => item._id === action.payload._id);
      if (findEx) {
        state.value = state.value.map((item) => {
          return item._id === action.payload._id
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
        state.totalQuantity += 1;
      }
      state.value.forEach((item) => (tongtien += item.totalPrice));
      state.allPrice = tongtien;
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    updateCart: (state, action) => {
      let tongtien = 0;
      const findEx = state.value.find((item) => item._id === action.payload._id);
      if (findEx) {
        state.value = state.value.map((item) => {
          return item._id === action.payload._id
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
      state.value = state.value.filter((item) => item._id !== action.payload);
      state.totalQuantity -= 1;
      state.value.forEach((item) => (tongtien += item.totalPrice));
      state.allPrice = tongtien;
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    deleteOneCart: (state, action) => {
      let tongtien = 0;
      const findEx = state.value.find((item) => item._id === action.payload._id);
      if (findEx) {
        state.value = state.value.map((item) => {
          return item._id === action.payload._id
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
    deleteAllCart:(state,action)=>{
      if(action.payload){
        state.value = [];
        state.allPrice = 0;
        state.totalQuantity = 0;
      }
    }
  },
});

const { actions, reducer } = cartSlice;
export const { addCart, deleteCart, updateCart, deleteOneCart,deleteAllCart } = actions;
export default reducer;
