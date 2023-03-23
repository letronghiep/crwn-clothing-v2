import React, { useContext } from 'react'


import { CartContext } from '../../Context/CartContext'


import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'


import './checkout.styles.scss'
function Checkout() {
    const { cartItems, totalCart } = useContext(CartContext)
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>

            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>
                TOTAL: $ {totalCart}
            </div>

        </div>
    )
}

export default Checkout