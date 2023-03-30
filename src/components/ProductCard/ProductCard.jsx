import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cartAction'
import { selectCartItems } from '../../store/cart/selectCart'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button'
import { ProductCardContainer, Footer, Name, Price } from './product-card.styles'
function ProductCard({ product }) {
    const { imageUrl, name, price } = product;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product))
    }
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} children="Add to cart" onClick={addProductToCart} />
        </ProductCardContainer>
    )
}

export default ProductCard