// @flow
import firebase, {User} from 'firebase';
export type EmptyProps = { };
export type Action = {
    type: string,
    payload: any
};
export type AuthState = {
    email: string,
    password: string,
    user?: User
};
export type UserCredentials = { } & AuthState;
