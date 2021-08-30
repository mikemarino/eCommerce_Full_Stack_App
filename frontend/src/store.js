// Store.js Connects reducers and middleware

// createsStore: function to create store
// combineReducers: Each reducer handles a certain piece of functionality. Such as fetching data from backend, a reducer will handle request, response, and errors
// applyMiddleware:  applies middleware

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
	productListReducer,
	productDetailsReducer,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'

// sets 'productList' as piece of state
const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,

})

const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: []

	const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

// set initial state to have data pre-loaded to state
const initialState = {
	cart: { cartItems: cartItemsFromStorage },
	userLogin: { userInfo: userInfoFromStorage },
}

// array of middleware to be passed to store
const middleware = [thunk]

// create store - pass in reducer (above)
// composeWithDevTools - enables chrome redux dev tool
// applyMiddleware - spreads middleware (above) and passes to store
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
