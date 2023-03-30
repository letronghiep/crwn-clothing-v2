import React, { useContext } from 'react'




import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'


import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'
import { useSelector } from 'react-redux'
import { selectCartItems, selectTotalCart } from '../../store/cart/selectCart'

function Checkout() {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectTotalCart);
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
                TOTAL: ${cartTotal}
            </Total>

        </CheckoutContainer>
    )
}

export default Checkout