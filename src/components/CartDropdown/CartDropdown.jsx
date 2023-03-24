import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import { CartDropdownContainer, CartItems, EmptyMess } from './cart-dropdown.styles'

import { CartContext } from '../../Context/CartContext'


import CartItem from '../CartItem/CartItem'
import Button from '../Button/Button'
function CartDropdown() {
    const navigate = useNavigate()
    const { cartItems } = useContext(CartContext)
    const gotoCheckoutHandler = () => navigate('/checkout')
    return (

        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />) : (
                    <EmptyMess>Your cart is empty</EmptyMess>
                )}
            </CartItems>
            <Button children="GO TO CHECKOUT" onClick={gotoCheckoutHandler} />
        </CartDropdownContainer>
    )
}

export default CartDropdown