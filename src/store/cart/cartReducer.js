import { CART_ACTION_TYPES } from "./cartTypes";


// export const updateCartItemsReducer = (newCartItems) => {
//     const newCountCart = newCartItems.reduce((total, cartItems) => total + cartItems.quantity, 0);
//     const newTotalCart = newCartItems.reduce((total, cartItems) => total + cartItems.quantity * cartItems.price, 0);
//     setCartItems(CART_ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, cartCount: newCountCart, totalCart: newTotalCart })
// }



export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}

export const cartItemsReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return { ...state, cartItems: payload }
        case CART_ACTION_TYPES.SET_CART_IS_OPEN:
            return { ...state, isCartOpen: payload }
        default:
            return state;
    }

}

