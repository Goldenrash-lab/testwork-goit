import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./thunk";

const catSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    prices: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        payload.forEach((el) => {
          state.categories.push(el.make);
        });
        payload.forEach((el) => {
          state.prices.push(el.rentalPrice);
        });
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state, { payload }) => {
        state.isLoading = false;

        state.error = payload;
      });
  },
});

export const catReducer = catSlice.reducer;
