import { LOGIN_SUCCESS, NO_LOGIN } from "../actions/constants"
const initialState = {
    isLoggedIn: false,
    name: ""
}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGIN_SUCCESS: return {
            ...state,
            isLoggedIn: true,
            name: action.data.name
        }

        case NO_LOGIN: return {
            ...state,
            isLoggedIn: false,
            name: ""
        }

        default: return state
    }
}

export default loginReducer;