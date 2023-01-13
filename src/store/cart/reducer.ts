import { ADD_PRODUCT, REMOVE_PRODUCT } from "./action"

export const initiatlState = {
    totalAmount: 0,
    totalProducts: 0,
}

export const cartReducer = (state = initiatlState, action:any) => {

    console.log("cartReducer", state, action)
    switch (action.type) {
        case ADD_PRODUCT: return {
            ...state,
            
            totalProducts: state.totalProducts + 1
        }
        case REMOVE_PRODUCT: return {
            ...state,
            totalProducts: state.totalProducts > 0 ? state.totalProducts -1 : 0
        }
       
        default: {
            return state
        }
    }

}
export default cartReducer