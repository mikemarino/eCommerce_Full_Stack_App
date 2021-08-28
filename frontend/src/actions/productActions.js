import axios from 'axios'
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants'


// action creators
// uses 'react-thunk' to add a async (function in a function)
// dispatch - how we dispatch actions (REQUEST, SUCCESS, FAIL) to reducer
// first dispatch request - calls REQUEST reducer which sets state

export const listProducts = () => async(dispatch)=>  { try {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    
	// makes request to database
    const { data } = await axios.get('/api/products')
    
	// dispatch SUCCESS action to reducer  
	// sends 'data' as payload
    dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
    })

} catch (error) {
	// if something goes wrong, handle error
	// payload is error message
    dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,

    })
    
}
    
}

export const listProductDetails = (id) => async(dispatch)=>  { try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    
    const { data } = await axios.get(`/api/products/${id}`)
    
    dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
    })

} catch (error) {
    dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,

    })
    
}
    
}