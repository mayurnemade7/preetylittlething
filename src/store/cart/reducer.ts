import { Product } from "../../screens/types";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./action"

export const initiatlState = {
    totalProducts: 0,
    cartItems: [],
    totalPrice: 0,
}

export const cartReducer = (state = initiatlState, action: any) => {

    console.log("cartReducer outside case", action)
    switch (action.type) {
        case ADD_PRODUCT: {

            const { payload } = action;
            const item = state.cartItems.find(
                product => product.id === payload.id ? true : false
            );

            const qty = item?.quantity || 1
            if (item) {
                console.log("cartReducer if", qty)
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item.id === payload.id
                        ? {
                            ...item,
                            quantity: qty + 1,
                        }
                        : item
                    ),
                    totalPrice: state.totalPrice + payload.price,
                    totalProducts: getTotalProducts(state.cartItems)
                };
            }
           
                console.log("cartReducer else ", state)
                const firstProduct = {...payload, quantity: qty}
                return {
                    ...state,
                    cartItems: [ ...state.cartItems, firstProduct ],
                    totalProducts: 1,
                    totalPrice: state.totalPrice + payload.price,
                    
                };
            
        }
        case REMOVE_PRODUCT: {
            const { payload } = action;
            const item = state.cartItems.find(
                product => product.id === payload.id ? true : false
            );

            const qty = item?.quantity || 1
            if (item) {
                console.log("cartReducer if", state)
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item.id === payload.id
                        ? {
                            ...item,
                            quantity: qty - 1,
                        }
                        : item
                    ),
                    totalPrice: state.totalPrice + payload.price,
                    totalProducts: getTotalProducts(state.cartItems)
                };
            }
           
                console.log("cartReducer else ", state)
                const firstProduct = {...payload, quantity: qty}
                return {
                    ...state,
                    cartItems: [ ...state.cartItems, firstProduct ],
                    totalPrice: state.totalPrice + payload.price,
                    totalProducts: getTotalProducts(state.cartItems)
                };
        }

        default: {
            return state
        }
    }

}

function getTotalProducts(cartItems: []) {
    return cartItems.reduce((result: number, p: Product) => result + p.quantity, 1);
}

export default cartReducer