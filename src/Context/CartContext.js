import { createContext, useEffect, useState } from 'react';

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
    // const existsProductItem = cartItems.find(cartItem => cartItem.id !== productToClear.id);
    return cartItems.filter(cartItem => cartItem.id !== productToClear.id)
}

export const CartContext = createContext({
    isOpen: false,
    setIsOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemToCart: () => { },
    clearItemToCart: () => { },
    countCart: 0,
    totalCart: 0,
});

export const CartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [countCart, setCountCart] = useState(0);
    const [totalCart, setTotalCart] = useState(0);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    const removeItemToCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
    const clearItemToCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear))
    }
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCountCart(newCartCount)

    }, [cartItems])
    useEffect(() => {
        setTotalCart(cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0))
    }, [cartItems])
    const value = { isOpen, setIsOpen, addItemToCart, cartItems, countCart, setCountCart, totalCart, removeItemToCart, clearItemToCart }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}