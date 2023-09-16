import { createSlice } from "@reduxjs/toolkit";

const productSLice = createSlice({
  name: "products",
  initialState: {
    data: [],
    isLoading: false,
    single: null,
  },
  reducers: {},
});

export const productReducer = productSLice.reducers;
