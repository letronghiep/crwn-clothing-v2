import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware from '@redux-saga/core'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'
const sagaMiddleWare = createSagaMiddleware()

const middleWares = [
    process.env.NODE_ENV === 'development' && logger,
    sagaMiddleWare

].filter(Boolean);

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);
sagaMiddleWare.run(rootSaga)
export const persistor = persistStore(store)