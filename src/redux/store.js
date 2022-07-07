import { configureStore } from "@reduxjs/toolkit";
import page from "./pageSlice";

export const store = configureStore({
  reducer: {
    page,
  },
});
