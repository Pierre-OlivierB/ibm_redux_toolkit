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
    addPicture: (state, { payload }) => {
      state.pictures.push(payload);
    },
    editPicture: (state, { payload }) => {
      state.pictures = state.pictures.map((pic) => {
        if (pic.id === payload[1]) {
          return {
            ...pic,
            artist: payload[0],
          };
        } else {
          return pic;
        }
      });
    },
  },
});

export default picturesSlice.reducer;
export const { setPictureData, addPicture, editPicture } =
  picturesSlice.actions;
