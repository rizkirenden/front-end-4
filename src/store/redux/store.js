import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;
