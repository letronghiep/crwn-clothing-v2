import { takeLatest, put, all, call } from 'redux-saga/effects'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase'

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categoryAction'

import { CATEGORY_ACTION_TYPES } from './categoryTypes'

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))

    }
}

export function* onFetchCategories() {
    yield takeLatest(
        CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    )
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}