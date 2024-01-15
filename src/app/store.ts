import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import wishSlice from "../features/wishlist/wishSlice";

const store = configureStore({
	reducer: {
		cart: cartSlice,
		wishlist: wishSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
