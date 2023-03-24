import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard';
import { CategoriesContext } from '../../Context/CategoriesContext';
import { CategoryPageContainer, CategoryTitle } from './category-page.styles'

function CategoryPage() {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState(categoriesMap[category])
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <>
            <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
            <CategoryPageContainer>
                {
                    products && products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }

            </CategoryPageContainer>

        </>
    )
}

export default CategoryPage