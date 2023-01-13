import { GET_PRODUCT_LIST_FAILURE, GET_PRODUCT_LIST_REQUEST, GET_PRODUCT_LIST_SUCCESS, SET_SELECTED_PRODUCT } from "./action"

export const initiatlState = {
    loading: false,
    list: [],
    selectedProduct:{}
}

export const productListReducer = (state = initiatlState, action:any) => {

    switch (action.type) {
        case GET_PRODUCT_LIST_REQUEST: return {
            ...state,
            loading: true,
            list: []
        }
        case GET_PRODUCT_LIST_SUCCESS: return {
            ...state,
            loading: false,
            list: action.payload
        }
        case GET_PRODUCT_LIST_FAILURE: return {
            ...state,
            loading: false,
            error: action.payload
        }
        case SET_SELECTED_PRODUCT: return {
            ...state,
            selectedProduct:action.payload
        }
        default: {
            return state
        }
    }

}
export default productListReducer