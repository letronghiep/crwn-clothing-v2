import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, clearItemToCart, removeItemToCart } from '../../store/cart/cartAction';
import { selectCartItems } from '../../store/cart/selectCart';

import { CheckoutItemContainer, ImageContainer, InfoItem, Arrow, Value, Quantity, RemoveButton } from './checkout-item.styles'
function CheckoutItem({ cartItem }) {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const { name, imageUrl, price, quantity } = cartItem;
    const newPrice = price * quantity;
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
    const removeItemHandler = () => dispatch(removeItemToCart(cartItems, cartItem))
    const clearItemHandler = () => dispatch(clearItemToCart(cartItems, cartItem))
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