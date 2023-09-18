import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchcategories } from "../hooks/productApiHandler";

export const getProducts = createAsyncThunk(
  "products/fetch",
  async (params) => {
    return await fetchProducts(params).then((data) => {
      return data;
    });
  }
);
export const getCategoires = createAsyncThunk(
  "products/categories/fetch",
  async (params) => {
    return await fetchcategories(params).then((data) => {
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
    categories: {
      data: [],
      isLoading: false,
      page: 1,
    },
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
      })
      .addCase(getCategoires.pending, (state, action) => {
        state.categories.isLoading = true;
      })
      .addCase(getCategoires.rejected, (state, action) => {
        state.categories.isLoading = false;
      })
      .addCase(getCategoires.fulfilled, (state, action) => {
        state.categories.isLoading = false;
        state.categories.data = action.payload;
      });
  },
});

export const productReducer = productSLice.reducer;
