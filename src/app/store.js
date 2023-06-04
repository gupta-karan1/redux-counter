import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    // will hold the reducers we will create
    counter: counterReducer,
  },
});
