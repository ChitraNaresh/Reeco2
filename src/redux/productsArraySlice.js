import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },
  reducers: {
    updateStatus: (state, action) => {
      state.allProducts = state.allProducts.map((eachItem) => {
        if (eachItem.Id === action.payload.idValue) {
          return { ...eachItem, status: action.payload.reason,approved:action.payload.isApproved };
        }
        return eachItem;
      });
    },
    updateEditedData:(state,action)=>{
      state.allProducts = state.allProducts.map((eachItem) => {
      if (eachItem.Id === action.payload.Id) {
        return { ...eachItem,...action.payload};
      }
      return eachItem;
    })},
    updateProduct: (state, action) => {
      state.allProducts = state.allProducts.map((eachItem) => {
        if (eachItem.Id === action.payload.Id) {
          return { ...eachItem, ...action.payload };
        }
        return eachItem;
      });
    },
    setInitialProducts:(state,action)=>{
      state.allProducts=action.payload
    }
  },
});

export const {updateEditedData, updateProduct, updateStatus ,setInitialProducts} = productsSlice.actions;
