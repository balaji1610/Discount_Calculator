import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  HistoryArray: [],
  value: 0,
};

export const HistorySlice = createSlice({
  name: "Calculator",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    addHistory: (state, action) => {
      state.HistoryArray = [...state.HistoryArray, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, addHistory } = HistorySlice.actions;

export default HistorySlice.reducer;
