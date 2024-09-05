import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popupForm: "",
  purchasePlot: "",
  ashesWall: "",
  ashesBed: "",
  biographyData: [], 
};

const theCemeterySlice = createSlice({
  name: "theCemetery",
  initialState,
  reducers: {
    setPopupForm: (state, action) => {
      state.popupForm = action.payload;
    },
    setPlot: (state, action) => {
      state.purchasePlot = action.payload;
    },
    setAshesWall: (state, action) => {
      state.ashesWall = action.payload;
    },
    setAshesBed: (state, action) => {
      state.ashesBed = action.payload;
    },
    setBiographyData: (state, action) =>
    {
      state.biographyData = action.payload;
    },
  },
});

export const {
  setPopupForm,
  setPlot,
  setAshesWall,
  setAshesBed,
  setBiographyData,
} = theCemeterySlice.actions;

export const selectPopupForm = (state) => state.theCemetery.popupForm;
export const selectPlot = (state) => state.theCemetery.purchasePlot;
export const selectAshesWall = (state) => state.theCemetery.ashesWall;
export const selectAshesBed = (state) => state.theCemetery.ashesBed;
export const selectBiographyData = (state) => state.theCemetery.biographyData; // New selector for biography data

export default theCemeterySlice.reducer;
