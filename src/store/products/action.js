export const GET_PRODUCT_LIST_REQUEST = "GET_PRODUCT_LIST_REQUEST"
export const GET_PRODUCT_LIST_SUCCESS = "GET_PRODUCT_LIST_SUCCESS"
export const GET_PRODUCT_LIST_FAILURE = "GET_PRODUCT_LIST_FAILURE"
export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT"


export const getProductList = () =>(
    {
        type:GET_PRODUCT_LIST_REQUEST
    }
)

export const getProductListSuccess = (payload) =>(
    {
        type:GET_PRODUCT_LIST_SUCCESS,
        payload
    }
)

export const getProductListFailure = () =>(
    {
        type:GET_PRODUCT_LIST_FAILURE
    }
)

export const setSelectedProduct = (payload) =>(
    {
        type:SET_SELECTED_PRODUCT,
        payload
    }
)