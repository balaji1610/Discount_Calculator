import { configureStore } from "@reduxjs/toolkit";
import HistoryReducer from "./features/History/HistorySlice";
export const store = configureStore({
  reducer: {
    counterStore: HistoryReducer,
  },
});
