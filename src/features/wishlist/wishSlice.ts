import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../types/types";

type initialStateProps = {
	wishlist: ProductProps[];
};

const initialState: initialStateProps = {
	wishlist: [],
};

const wishSlice = createSlice({
	name: "wishlists",
	initialState,
	reducers: {
		addToWishlist: (state, action: PayloadAction<ProductProps>) => {
			let wishItem: ProductProps;
			const elIdx = state.wishlist.findIndex((item) => item.id === action.payload.id);

			if (elIdx >= 0) {
				// state.wishlist[elIdx].quantity += 1;
				console.log("Don't Matter!");
			} else {
				wishItem = { ...action.payload, inWishlist: true };
				state.wishlist.push(wishItem);
				localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
			}
		},

		deleteFromWishlist: (state, action: PayloadAction<ProductProps>) => {
			state.wishlist = state.wishlist.filter((item) => {
				item.inWishlist = false;
				item.id !== action.payload.id;
			});
			localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
		},
	},
});

export const { addToWishlist, deleteFromWishlist } = wishSlice.actions;

export default wishSlice.reducer;
