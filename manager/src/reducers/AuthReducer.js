// @flow
import type { AuthState, Action } from "../types";
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS} from "../actions/types";

const INITIAL_STATE: AuthState = {
    email: '',
    password: '',
    user: null
};

export default (state: AuthState = INITIAL_STATE, action: Action): AuthState => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload}; // make new obj, take all existing state props, define email prop and append
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload};
        default: return state;
    }
};
