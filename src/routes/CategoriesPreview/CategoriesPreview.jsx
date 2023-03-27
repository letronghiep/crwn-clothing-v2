import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';



import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { selectCategory } from '../../store/categories/selectCategory';

function CategoriesPreview() {


    const categoriesMap = useSelector(selectCategory)
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return <CategoryPreview title={title} key={title} products={products} />
                })

            }
        </Fragment>
    )
}

export default CategoriesPreview