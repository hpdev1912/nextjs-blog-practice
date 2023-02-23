import { configureStore } from "@reduxjs/toolkit";
import postReducer from "@/app/postSlice";

const rootReducer = {
  posts: postReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
