import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';


import './checkout-item.styles.scss'
function CheckoutItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    const { addItemToCart, removeItemToCart, clearItemToCart } = useContext(CartContext);
    const newPrice = price * quantity;
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemToCart(cartItem)
    const clearItemHandler = () => clearItemToCart(cartItem)
    return (
        <div className='checkout-item-container' >
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler} >
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{newPrice}</span>
            <div className='remove-button' onClick={clearItemHandler} >
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem