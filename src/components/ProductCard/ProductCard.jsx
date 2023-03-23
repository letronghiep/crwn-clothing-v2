import React, { useContext } from 'react'
import './product-card.styles.scss'
import Button from '../Button/Button'
import { CartContext } from '../../Context/CartContext'
function ProductCard({ product }) {
    const { imageUrl, name, price } = product
    const { addItemToCart} = useContext(CartContext)
    const addProductToCart = () => {
        addItemToCart(product)

    }
    return (
        <div className='product-card-container' >
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" children="Add to cart" onClick={addProductToCart} />
        </div>
    )
}

export default ProductCard