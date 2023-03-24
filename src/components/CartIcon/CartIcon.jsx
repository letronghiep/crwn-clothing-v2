import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles'

function CartIcon() {
    const { isOpen, setIsOpen, countCart } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsOpen(!isOpen)
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{countCart}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon