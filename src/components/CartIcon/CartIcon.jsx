import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles'

function CartIcon() {
    const { setIsOpen, isOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsOpen(!isOpen)
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon