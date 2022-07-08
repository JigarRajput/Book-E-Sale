import { setProductsAction } from "../actions/setProductsAction";
import { SET_PRODUCTS } from "../actions/constants";

const initialState = {
    productItems: [],
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_PRODUCTS: return {
            ...state,
            productItems: [...state.productItems, action.data]
        }
        default:
            return state
    }

}

export default productReducer;