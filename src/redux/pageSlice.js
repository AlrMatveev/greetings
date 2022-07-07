import { createSlice } from "@reduxjs/toolkit";
import About from "../components/body/about";
import Technologies from "../components/body/technologies";
import Portfolio from "../components/body/portfolio";
import Contacts from "../components/body/contacts";

const initialState = {
  // pages: [
  //   {
  //     id: 0,
  //     name: "About Me",
  //     body: <About />,
  //   },
  //   {
  //     id: 1,
  //     name: "Technologies",
  //     body: <Technologies />,
  //   },
  //   {
  //     id: 2,
  //     name: "Portfolio",
  //     body: <Portfolio />,
  //   },
  //   {
  //     id: 3,
  //     name: "Contacts",
  //     body: <Contacts />,
  //   },
  // ],
  scroll: 0,
  load: false,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    loadPage: (state, action) => {
      state.load = action.payload;
    },
    increment: (state) => {
      state.scroll += 1;
    },
    decrement: (state) => {
      state.scroll -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadPage, increment, decrement } = pageSlice.actions;

export default pageSlice.reducer;
