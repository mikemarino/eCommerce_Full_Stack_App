// Each resource in app will have reducer file
// handles state for product list found on homepage


// import from constants folder - central place for all our cases/constants
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_FAIL,
	PRODUCT_CREATE_REQUEST,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_CREATE_FAIL,
	PRODUCT_CREATE_RESET,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_UPDATE_RESET,
} from '../constants/productConstants'

// reducers take in two things: initial state and action
// actions are dispatched to reducer
// actions are objects that have type. could contain payload
export const productListReducer = (state = { products: [] }, action) => {
	// evaluate action type
	switch (action.type) {
		// in each case, return part of state
		//  REQUEST - 'loading:true' lets the component know that it is currently fetching.
		// 'products:[]' is empty array because it hasn't been fulfilled yet
		case PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] }
		// SUCCESS - 'loading:false' lets component know it is done making the request.
		// 'products: action.payload' filled with action object will return attached payload. fill products in that state with payload.
		case PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload }
		// FAIL - 'loading:false' lets component know it is done making the request.
		// 'error: action.payload' sends error in the payload
		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload }
		// default to initial state
		default:
			return state
	}
}

export const productDetailsReducer = (
	state = { product: { reviews: [] } },
	action
) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return { loading: true, ...state }
		case PRODUCT_DETAILS_SUCCESS:
			return { loading: false, product: action.payload }
		case PRODUCT_DETAILS_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}


export const productCreateReducer = (
	state = {  },
	action
) => {
	switch (action.type) {
		case PRODUCT_CREATE_REQUEST:
			return { loading: true }
		case PRODUCT_CREATE_SUCCESS:
			return { loading: false, success: true, product: action.payload }
		case PRODUCT_CREATE_FAIL:
			return { loading: false, error: action.payload }
		case PRODUCT_CREATE_RESET:
			return {}
		default:
			return state
	}
}


export const productDeleteReducer = (
	state = {  },
	action
) => {
	switch (action.type) {
		case PRODUCT_DELETE_REQUEST:
			return { loading: true }
		case PRODUCT_DELETE_SUCCESS:
			return { loading: false, success: true }
		case PRODUCT_DELETE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const productUpdateReducer = (
	state = { product: {} },
	action
) => {
	switch (action.type) {
		case PRODUCT_UPDATE_REQUEST:
			return { loading: true }
		case PRODUCT_UPDATE_SUCCESS:
			return { loading: false, success: true, product: action.payload }
		case PRODUCT_UPDATE_FAIL:
			return { loading: false, error: action.payload }
		case PRODUCT_UPDATE_RESET:
			return { product: {}}
		default:
			return state
	}
}