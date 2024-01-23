import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "getCategories/",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/cars");
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
