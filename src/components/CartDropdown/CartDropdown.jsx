import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CartItem from '../CartItem/CartItem'

import { CartDropdownContainer, CartItems, EmptyMess } from './cart-dropdown.styles'



import Button from '../Button/Button'
import { selectCartItems } from '../../store/cart/selectCart'
function CartDropdown() {
    const navigate = useNavigate()
    const gotoCheckoutHandler = () => navigate('/checkout')
    const cartItems = useSelector(selectCartItems)
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