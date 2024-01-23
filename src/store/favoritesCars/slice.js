import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favorites",
  initialState: { favCars: [] },
  reducers: {
    toggleHeart: (state, { payload }) => {
      const favorite = state.favCars.find((item) => item === payload);
      favorite
        ? state.favCars.splice(
            state.favCars.findIndex((item) => item === payload),
            1
          )
        : state.favCars.push(payload);
    },
  },
});

export const { toggleHeart } = favSlice.actions;

export const favReducer = favSlice.reducer;
