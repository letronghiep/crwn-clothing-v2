import { createSelector } from "reselect";
const selectCartReducer = state => state.cart
export const selectCartItems = createSelector([selectCartReducer], cart => cart.cartItems)

export const selectCartIsOpen = createSelector([selectCartReducer], cart => cart.isCartOpen)

export const selectCartCount = createSelector([selectCartItems], (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0))


export const selectTotalCart = createSelector([selectCartItems], (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0))

