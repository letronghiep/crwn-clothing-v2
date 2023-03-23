import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard';
import { CategoriesContext } from '../../Context/CategoriesContext';
 import './category-page.styles.scss'

function CategoryPage() {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState(categoriesMap[category])
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <div className='category-page-container'>
            {
                products && products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }

        </div>
    )
}

export default CategoryPage