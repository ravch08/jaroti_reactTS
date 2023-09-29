import { createSlice } from "@reduxjs/toolkit";
import { productItems } from "../../components/utils/data";

const initialState = {
	cart: [],
	totalPrice: 0,
	items: productItems,
	totalCartQuantity: 0,
};

const cartSlice = createSlice({
	name: "carts",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const elIdx = state.cart.findIndex((item) => item.id === action.payload.id);

			if (elIdx >= 0) {
				state.cart[elIdx].quantity += 1;
			} else {
				let cartItem = { ...action.payload, quantity: action.payload.quantity };
				state.cart.push(cartItem);
			}

			localStorage.setItem("cart", JSON.stringify(state.cart));
		},

		deleteFromCart: (state, action) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload.id);
		},

		getCartTotal: (state) => {
			let totalPrice = 0;
			let totalCartQuantity = 0;

			state.cart.forEach((cartItem) => {
				const { price, quantity } = cartItem;
				const itemTotal = quantity * price;
				totalPrice += itemTotal;
				totalCartQuantity += quantity;
			});

			state.totalCartQuantity = totalCartQuantity;
			state.totalPrice = parseFloat(totalPrice.toFixed(2));
		},

		incrementQuantity: (state, action) => {
			state.cart = state.cart.map((item) => {
				if (item.id === action.payload.id) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
		},

		decrementQuantity: (state, action) => {
			state.cart = state.cart.map((item) => {
				if (item.id === action.payload.id) {
					return { ...item, quantity: item.quantity - 1 };
				}
				return item;
			});
		},
	},
});

export const { addToCart, deleteFromCart, getCartTotal, incrementQuantity, decrementQuantity } =
	cartSlice.actions;

export default cartSlice.reducer;
