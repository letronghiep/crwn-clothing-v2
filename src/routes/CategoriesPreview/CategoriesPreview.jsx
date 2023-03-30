import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';



import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { selectIsLoading, selectCategory } from '../../store/categories/selectCategory';
import Spinner from '../../components/Spinner/Spinner';
function CategoriesPreview() {

    const categoriesMap = useSelector(selectCategory)
    const isLoading = useSelector(selectIsLoading)
    return (
        <Fragment>
            {isLoading ? (<Spinner />) :
                (Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return <CategoryPreview title={title} key={title} products={products} />
                }))

            }
        </Fragment>
    )
}

export default CategoriesPreview