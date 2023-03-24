import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';


import { CheckoutItemContainer, ImageContainer, InfoItem, Arrow, Value, Quantity, RemoveButton } from './checkout-item.styles'
function CheckoutItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    const { addItemToCart, removeItemToCart, clearItemToCart } = useContext(CartContext);
    const newPrice = price * quantity;
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemToCart(cartItem)
    const clearItemHandler = () => clearItemToCart(cartItem)
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <InfoItem>{name}</InfoItem>
            <Quantity>
                <Arrow onClick={removeItemHandler} >
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <InfoItem>{newPrice}</InfoItem>
            <RemoveButton onClick={clearItemHandler} >
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem