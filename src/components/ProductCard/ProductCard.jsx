import React, { useContext } from 'react'
import Button, {BUTTON_TYPE_CLASSES} from '../Button/Button'
import {ProductCardContainer, Footer, Name, Price} from './product-card.styles'

import { CartContext } from '../../Context/CartContext'
function ProductCard({ product }) {
    const { imageUrl, name, price } = product
    const { addItemToCart} = useContext(CartContext)
    const addProductToCart = () => {
        addItemToCart(product)

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