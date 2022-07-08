import { SEARCH_TERM } from "../actions/constants";

const initialState = {
    term: ""
}

const searchReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEARCH_TERM: return {
            ...state,
            term: action.book
        }
        default: return state
    }
}

export default searchReducer;