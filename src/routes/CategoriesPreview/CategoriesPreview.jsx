import React, { Fragment, useContext } from 'react'


import { CategoriesContext } from '../../Context/CategoriesContext'


import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
function CategoriesPreview() {
    const { categoriesMap } = useContext(CategoriesContext);

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