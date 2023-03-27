import React, { useContext } from 'react'


import { CartContext } from '../../Context/CartContext'


import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'


import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'
function Checkout() {
    const { cartItems, totalCart } = useContext(CartContext)
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock><span>Product</span></HeaderBlock>
                <HeaderBlock><span>Description</span></HeaderBlock>
                <HeaderBlock><span>Quantity</span></HeaderBlock>
                <HeaderBlock><span>Price</span></HeaderBlock>
                <HeaderBlock><span>Remove</span></HeaderBlock>

            </CheckoutHeader>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Total>
                TOTAL: ${totalCart}
            </Total>

        </CheckoutContainer>
    )
}

export default Checkout