import { LOGIN_SUCCESS, NO_LOGIN } from "./constants";

const loginActionSuccess = (data) => {

    return {
        type: LOGIN_SUCCESS,
        data: data
    }

}

const noLogin = (data) => {

    return {
        type: NO_LOGIN,
        data: data
    }

}

export default loginAction;