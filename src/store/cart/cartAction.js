import { CART_ACTION_TYPES } from './cartTypes'

import { createAction } from '../../utils/reducer/reducer'

const addCartItem = (cartItems, productToAdd) => {
    const existsProductItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
    if (existsProductItem) return cartItems.map(cartItem => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}
const removeCartItem = (cartItems, productToRemove) => {
    const existsProductItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);
    if (existsProductItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
    }
    return cartItems.map(cartItem => cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)

}
const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== productToClear.id)
}

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};
export const removeItemToCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)

}
export const clearItemToCart = (cartItems, productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)

}

export const setCartIsOpen = (boolean) => {
    return createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN, boolean)
}