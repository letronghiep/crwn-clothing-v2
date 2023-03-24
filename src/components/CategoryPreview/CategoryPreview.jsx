import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

import {CategoryPreviewContainer, Title, Preview } from './category-preview.styles'

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {
          products.filter((_, idx) => idx < 4).map(product => (
            <ProductCard product={product} key={product.id} />
          ))
        }
      </Preview>


    </CategoryPreviewContainer>
  )
}

export default CategoryPreview