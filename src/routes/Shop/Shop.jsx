import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchCategoriesStart } from '../../store/categories/categoryAction';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import CategoryPage from '../CategoryPage/CategoryPage';



function Shop() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<CategoryPage />} />
        </Routes>
    )
}

export default Shop