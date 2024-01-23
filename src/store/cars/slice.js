import { createSlice } from "@reduxjs/toolkit";
import { getAllCar, getAllCarWithFilteres } from "./thunk";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    isLoading: false,
    error: "",
    page: 0,
  },
  reducers: {
    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCar.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.cars =
          state.page !== 1
            ? [...state.cars, ...payload]
            : (state.cars = payload);
      })
      .addCase(getAllCar.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getAllCarWithFilteres.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCarWithFilteres.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cars = payload;
      })
      .addCase(getAllCarWithFilteres.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { changePage } = carSlice.actions;

export const carsReducer = carSlice.reducer;
