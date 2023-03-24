import React from 'react'

import { CartItemContainer, CartItemDetails }  from './cart-item.styles'


function CartItem({ cartItem }) {
    const {name, imageUrl, price, quantity } = cartItem
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <CartItemDetails>
                <h2>{name}</h2>
                <span>{quantity} x ${price}</span>
            </CartItemDetails>


        </CartItemContainer>
    )
}

export default CartItem