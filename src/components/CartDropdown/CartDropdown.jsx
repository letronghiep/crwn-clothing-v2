import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import './cart-dropdown.styles.scss'

import { CartContext } from '../../Context/CartContext'


import CartItem from '../CartItem/CartItem'
import Button from '../Button/Button'
function CartDropdown() {
    const navigate = useNavigate()
    const { cartItems } = useContext(CartContext)
    const gotoCheckoutHandler = () => navigate('/checkout')
    return (

        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
            </div>
            <Button children="GO TO CHECKOUT" onClick={gotoCheckoutHandler} />
        </div>
    )
}

export default CartDropdown