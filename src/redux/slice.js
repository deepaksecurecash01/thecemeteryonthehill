import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popupForm: '',
};

export const theCemeterySlice = createSlice({
  name: "theCemetery",
  initialState,
  reducers: {
      setPopupForm: (state, action) =>
      {
          console.log(action.payload)
      state.popupForm = action.payload;
    },
  },
});

export const { setPopupForm } = theCemeterySlice.actions;

export const selectPopupForm = (state) => state.theCemetery.popupForm;

export default theCemeterySlice.reducer;
