import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

import rootReducer from "./root-reducer";
const middlewares = [logger];

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  },
  applyMiddleware(...middlewares)
);

export default store;
