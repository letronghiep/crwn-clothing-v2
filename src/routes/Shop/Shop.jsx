import React, { useContext } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ProductsContext } from '../../Context/ProductsContext'
import './shop.styles.scss'

function Shop() {
    const { products } = useContext(ProductsContext)
    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop