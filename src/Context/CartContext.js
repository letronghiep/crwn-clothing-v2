import { createContext, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer';

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

export const CartContext = createContext({
    isOpen: false,
    setIsOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemToCart: () => { },
    clearItemToCart: () => { },
    cartCount: 0,
    totalCart: 0,
});

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }
        case 'SET_CART_OPEN':
            return {
                ...state,
                isOpen: payload
            }
        default:
            throw new Error(`can't find ${type} in type of CART_ACTION_TYPE`);

    }
}
const INITIAL_STATE = {
    isOpen: false,
    cartItems: [],
    cartCount: 0,
    totalCart: 0,
}



export const CartProvider = ({ children }) => {
    const [{ cartItems, isOpen, cartCount, totalCart }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCountCart = newCartItems.reduce((total, cartItems) => total + cartItems.quantity, 0);
        const newTotalCart = newCartItems.reduce((total, cartItems) => total + cartItems.quantity * cartItems.price, 0);
        dispatch(createAction('SET_CART_ITEMS', { cartItems: newCartItems, cartCount: newCountCart, totalCart: newTotalCart }))
    }
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    };
    const removeItemToCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove)
        updateCartItemsReducer(newCartItems)

    }
    const clearItemToCart = (productToClear) => {
        const newCartItems = clearCartItem(cartItems, productToClear)
        updateCartItemsReducer(newCartItems)
    }
    const setIsOpen = (bool) => {
        dispatch(createAction('SET_CART_OPEN', bool))
    }
    const value = { isOpen, setIsOpen, addItemToCart, cartItems, cartCount, totalCart, removeItemToCart, clearItemToCart }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}