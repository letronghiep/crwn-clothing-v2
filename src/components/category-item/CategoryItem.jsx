import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoryContainer, CategoryBodyContainer, BackgroundImage } from './category.styles'

function CategoryItem({ category }) {
    const {imageUrl, title, route} = category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route)
    return (
        <CategoryContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <CategoryBodyContainer>
                <h2 >{title}</h2>
                <p>Shop Now</p>
            </CategoryBodyContainer>
        </CategoryContainer>
    )
}

export default CategoryItem