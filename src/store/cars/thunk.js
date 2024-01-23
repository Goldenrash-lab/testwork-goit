import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6582e45902f747c8367a8619.mockapi.io/";

export const getAllCar = createAsyncThunk(
  "getAllCar",
  async ({ p = "", l = "" }, ThunkApi) => {
    try {
      const { data } = await axios.get(`cars?p=${p}&l=${l}&orderBy=mileage`);
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  }
);

export const getAllCarWithFilteres = createAsyncThunk(
  "getAllCarWithFilteres",
  async ({ p, l, make = "", rentalPrice = "" }, ThunkApi) => {
    try {
      const { data } = await axios.get(
        `cars?p=${p}&l=${l}&make=${make}&rentalPrice=${rentalPrice}&orderBy=mileage`
      );
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  }
);
