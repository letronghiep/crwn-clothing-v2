import { useContext } from 'react'


import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg'

import { CartContext } from '../../Context/CartContext'


import './cart-icon.styles.scss'

function CartIcon() {
    const { isOpen, setIsOpen, countCart } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsOpen(!isOpen)
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingCart className='shopping-icon' />
            <span className='item-count'>{countCart}</span>
        </div>
    )
}

export default CartIcon