// @flow
import type { Action, UserCredentials } from "../types";
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "./types";
import firebase from 'firebase';
import type { Dispatch } from "redux";

export const emailChanged = (text: string): Action => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

// These actions are passed into dispatch just like the loginUser action
export const passwordChanged: (text: string) => Action = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

// With Redux Thunk, we can have action creators return functions
// This will give us access to dispatch
export const loginUser = (credentials: UserCredentials): Dispatch =>  {
    return (dispatch: Dispatch) => {
        const { email, password } = credentials;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user: firebase.auth.UserCredential) => {
                onLoginSuccess(dispatch, user);
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user: firebase.auth.UserCredential) => {
                        onLoginSuccess(dispatch, user);
                    })
                    .catch(() => onLoginError(dispatch));
            });
    };
};

const onLoginError = (dispatch: Dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

const onLoginSuccess = (dispatch: Dispatch, user: firebase.auth.UserCredential) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};