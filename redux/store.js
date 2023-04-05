import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {apiSlice} from "./features/apiSlice";
import postReducer from "./features/postSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      posts: postReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
  });
export const AppStore = makeStore;
export const AppState = AppStore["getState"];
export const AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper(makeStore, {debug: true});
