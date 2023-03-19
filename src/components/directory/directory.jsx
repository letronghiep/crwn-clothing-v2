import React from 'react'
import CategoryItem from '../category-item/category-item'
import './directory.styles.scss'
function Directory({ categories }) {
    return (
        <div className='categories-container'>

            {
                categories.map(category => (
                    <CategoryItem category={category} key={category.id} />


                ))
            }

        </div>
    )
}

export default Directory