import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  HistoryArray: [],
  calleffect: 0,
};

export const HistorySlice = createSlice({
  name: "Calculator",
  initialState,
  reducers: {
    callUserEffect: (state) => {
      state.calleffect += 1;
    },

    addHistory: (state, action) => {
      state.HistoryArray = [...state.HistoryArray, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { callUserEffect, addHistory } = HistorySlice.actions;

export default HistorySlice.reducer;
