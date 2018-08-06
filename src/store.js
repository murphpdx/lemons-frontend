import { hashHistory } from 'react-router'
import {  routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import invariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

const createEnhancer = () => {
    return applyMiddleware(thunk)
}

const appReducer = combineReducers({
    routing: routerReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

function configureStore (initialState) {
    return createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
const store = configureStore()

export default store