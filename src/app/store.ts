import { configureStore } from "@reduxjs/toolkit";
import wishCartReducer from "./reducers/wishCartSlice";

const store = configureStore({
  reducer: {
    wishCartState: wishCartReducer
  },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware().concat(logger);
  // }
});

export default store;