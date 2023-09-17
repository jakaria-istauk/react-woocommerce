import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../hooks/productApiHandler";

export const getProducts = createAsyncThunk(
  "products/fetch",
  async (params) => {
    return await fetchProducts(params).then((data) => {
      return data;
    });
  }
);

const productSLice = createSlice({
  name: "products",
  initialState: {
    data: [],
    isLoading: false,
    single: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export const productReducer = productSLice.reducer;
