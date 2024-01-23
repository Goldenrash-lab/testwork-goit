import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllCar, getAllCarWithFilteres } from "../cars/thunk";
import { getCategories } from "../categories/thunk";

const LoaderSlice = createSlice({
  name: "loader",
  initialState: {
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          getAllCar.pending,
          getAllCarWithFilteres.pending,
          getCategories.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllCar.fulfilled,
          getAllCarWithFilteres.fulfilled,
          getCategories.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllCar.rejected,
          getAllCarWithFilteres.rejected,
          getCategories.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const loaderReducer = LoaderSlice.reducer;
