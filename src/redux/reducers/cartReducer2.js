import { ADD_TO_CART, REMOVE_FROM_CART, TOTAL_PRICE_DECREASE, TOTAL_PRICE_INCREASE, REDUCE_ITEM_COUNT } from "../actions/constants";
import { addToCartAction } from "../actions/addCartActions";

const initialState = {
    cartItems: []
}

const cartReducer2 = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_CART:
            {
                var flag = 0;
                //if no item present then simply add that item
                if (state.cartItems.length === 0) {
                    var item = {
                        ...action.data,
                        count: 1
                    }
                    return {
                        ...state,
                        cartItems: [...state.cartItems, item]
                    }
                }

                // if few items are present then do following accordingly
                else {
                    let updatedCart = state.cartItems.map((book) => {
                        var returnValue = { ...book };

                        if (book.id === action.data.id) {
                            returnValue.count = returnValue.count + 1
                            // flag 1 means duplicate book added
                            flag = 1;
                        }

                        return returnValue
                    })

                    // if duplicate book added then return the updated cart
                    if (flag === 1)
                        return {
                            ...state,
                            cartItems: [...updatedCart]
                        }

                    // if new book added return the cart with that item added     
                    else {
                        var item = {
                            ...action.data,
                            count: 1
                        }
                        return {
                            ...state,
                            cartItems: [...state.cartItems, item]

                        }
                    }
                }
            }

        case REMOVE_FROM_CART: return {
            ...state,
            numOfItems: state.numOfItems - 1,
            cartItems: [...state.cartItems.filter(item => item.title != action.data.title)]

        }

        case REDUCE_ITEM_COUNT:
            {
                var flag_zero = 0
                let updatedCart = state.cartItems.map((book) => {

                    var returnBook = { ...book }

                    if (returnBook.id === action.data.id) {
                        returnBook.count = returnBook.count - 1;

                        if (returnBook.count != 0)
                            return returnBook;

                        if (returnBook.count === 0)
                            flag_zero = 1;
                    }

                    else {
                        return returnBook;
                    }
                })

                // if count of item has reached 0, you have to return all items except this item
                if (flag_zero === 1) {
                    var Items = [...state.cartItems.filter(item => item.title != action.data.title)]
                    return {
                        ...state,
                        cartItems: [...Items]
                    }
                }

                // if count has not yet reached 0 return this book also with updated count
                else {
                    return {
                        ...state,
                        cartItems: [...updatedCart]
                    }
                }

            }



        // case TOTAL_PRICE_INCREASE: return {
        //     ...state,
        //     total_price: state.total_price + action.price

        // }

        // case TOTAL_PRICE_DECREASE: return {
        //     ...state,
        //     total_price: state.total_price - action.price

        // }
        default:
            return state
    }

}

export default cartReducer2;