import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import CategoryPage from '../CategoryPage/CategoryPage';



function Shop() {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<CategoryPage />} />
        </Routes>
    )
}

export default Shop