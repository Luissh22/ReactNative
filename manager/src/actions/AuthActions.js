// @flow
import type { Action, UserCredentials } from "../types";
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from "./types";
import firebase from 'firebase';
import type { Dispatch } from "redux";
import NavigationService from '../navigation/NavigationService';
import { EMPLOYEE_LIST } from "../navigation/Screens";

export const emailChanged = (text: string): Action<string> => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

// These actions are passed into dispatch just like the loginUser action
export const passwordChanged: (text: string) => Action<string> = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

// With Redux Thunk, we can have action creators return functions
// Redux Thunk sees we returned a func and will automatically call this func with
// dispatch func as an arg
// This will give us access to dispatch
// Since this is async, we can't return an action since we don't know when the call will finish
// Instead we are allowed to manually dispatch the action ourselves when this async call finishes
export const loginUser = (credentials: UserCredentials): Dispatch =>  {
    return (dispatch: Dispatch) => {
        // Dispatch the login user start acton.
        // Purpose of dispatching this action is so we can update our state so show spinner
        dispatch({
            type: LOGIN_USER_START
        });

        const { email, password } = credentials;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user: firebase.auth.UserCredential) => {
                onLoginSuccess(dispatch, user); // manually dispatch action
            })
            .catch((err) => {
                console.log(err);
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
    // navigate to employee list
    NavigationService.navigate(EMPLOYEE_LIST);
};