import { useDispatch, useSelector } from 'react-redux';
import { setCartIsOpen } from '../../store/cart/cartAction';
import { selectCartCount, selectCartIsOpen } from '../../store/cart/selectCart';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles'

function CartIcon() {
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectCartIsOpen);
    const cartCount = useSelector(selectCartCount);
    const toggleIsCartOpen = () => dispatch(setCartIsOpen(!isCartOpen))
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon