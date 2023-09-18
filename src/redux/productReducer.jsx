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
    page: 1,
    cart: [],
    isLodingMore: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        if (action.meta.arg?.page > 1) {
          state.isLodingMore = true;
        } else {
          state.isLoading = true;
        }
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isLodingMore = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLodingMore = false;
        if (action.meta.arg?.page > 1) {
          state.page++;
          state.data = [...state.data, ...action.payload];
        } else {
          state.data = action.payload;
        }
        if (action.payload.length < action.meta.arg?.per_page) {
          state.page = -1;
        }
      });
  },
});

export const productReducer = productSLice.reducer;
