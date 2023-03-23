import { createContext, useEffect, useState } from 'react'

import { getCategoriesAndDocuments, addCollectionAndDocuments } from '../utils/firebase/firebase.js';

import { SHOP_DATA } from '../shop-data'
export const CategoriesContext = createContext({
    categoriesMap: {},

});
export const CategoriesProvider = ({ children }) => {

    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA)
    }, [])

    useEffect(() => {
        const getCategoryMap = async () => {
            const getCategoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(getCategoryMap)
        }
        getCategoryMap()
    }, [])

    const value = { categoriesMap }
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}