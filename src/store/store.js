import { createStore, compose, applyMiddleware } from 'redux'

import logger from 'redux-logger'

import { rootReducer } from './rootReducer'
const middleWares = [logger]
console.log(middleWares);
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);