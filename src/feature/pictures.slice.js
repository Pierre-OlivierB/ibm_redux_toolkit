import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
  name: "pictures",
  initialState: {
    pictures: null,
  },
  reducers: {
    setPictureData: (state, { payload }) => {
      state.pictures = payload;
    },
  },
});

export default picturesSlice.reducer;
export const { setPictureData } = picturesSlice.actions;
