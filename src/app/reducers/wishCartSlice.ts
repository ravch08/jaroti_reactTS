import { createSlice } from "@reduxjs/toolkit";
import { productItems } from "../../components/utils/data";

const initialState = {
  cart: [],
  wishlist: [],
  totalPrice: 0,
  wishQuantity: 0,
  items: productItems,
  totalCartQuantity: 0,
}

const wishCartSlice = createSlice({
  name: 'wishCart',
  initialState,
  reducers: {

    addToWishlist: (state, action) => {
      const el = state.wishlist.findIndex(item => item.id === action.payload.id)

      if (el >= 0) {
        state.wishlist[el].wishQuantity += 1;
      } else {
        state.wishlist.push(action.payload)
      }
    },

    deleteFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id)
    },

    addToCart: (state, action) => {
      const el = state.cart.findIndex(item => item.id === action.payload.id)

      if (el >= 0) {
        state.cart[el].quantity += 1;
      } else {
        state.cart.push(action.payload)
      }
    },

    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id)
    },

    getCartTotal: (state) => {
      let totalPrice = 0;
      let totalCartQuantity = 0;

      state.cart.forEach(cartItem => {
        const { price, quantity } = cartItem;
        const itemTotal = quantity * price;
        totalPrice += itemTotal;
        totalCartQuantity += quantity;
      });

      state.totalCartQuantity = totalCartQuantity;
      state.totalPrice = parseFloat(totalPrice.toFixed(2))
    },

    incrementQuantity: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item;
      })
    },

    decrementQuantity: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item;
      })
    }
  }

})

export const { addToWishlist, addToCart, deleteFromCart, deleteFromWishlist, getCartTotal, incrementQuantity, decrementQuantity } = wishCartSlice.actions;

export default wishCartSlice.reducer;