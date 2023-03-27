import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { setCategories } from '../../store/categories/categoryAction';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import CategoryPage from '../CategoryPage/CategoryPage';



function Shop() {
    const dispatch = useDispatch()
    useEffect(() => {
        const getCategories = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(categoriesArray));
        };

        getCategories();
    }, [dispatch]);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<CategoryPage />} />
        </Routes>
    )
}

export default Shop