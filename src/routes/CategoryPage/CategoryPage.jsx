import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard';
import Spinner from '../../components/Spinner/Spinner';
import { selectIsLoading, selectCategory } from '../../store/categories/selectCategory';
import { CategoryPageContainer, CategoryTitle } from './category-page.styles'

function CategoryPage() {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategory)
    const [products, setProducts] = useState(categoriesMap[category])
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    const isLoading = useSelector(selectIsLoading);
    console.log(isLoading);
    return (
        <>
            <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
            <CategoryPageContainer>
                {
                    isLoading ? <Spinner /> :
                        (products && products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        )))
                }

            </CategoryPageContainer>

        </>
    )
}

export default CategoryPage