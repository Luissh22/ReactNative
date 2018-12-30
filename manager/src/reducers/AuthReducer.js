// @flow
import type { AuthState } from "../types";
import { Action } from "../types";
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from "../actions/types";

const INITIAL_STATE: AuthState = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state: AuthState = INITIAL_STATE, action: Action<any>): AuthState => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload}; // make new obj, take all existing state props, define email prop and append
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER_START: // user login started
            return {...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS: // reset state
            return {...state, user: action.payload, ...INITIAL_STATE};
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed.', password: '', loading: false };
        default: return state;
    }
};
