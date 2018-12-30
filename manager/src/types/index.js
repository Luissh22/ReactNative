// @flow
import firebase, {User} from 'firebase';

interface NavigationScreenProps {
    navigate: (screen: string, params?: {}) => void;
    goBack: () => void;
    getParam: (paramName: string, defaultValue: string) => ?{};
}

export type NavigationProps = {
    navigation: NavigationScreenProps
};

export interface Action<T> {
    type: string;
    payload: T;
}

export type AuthState = {
    email: string,
    password: string,
    user?: User,
    error?: string,
    loading?: boolean
};
export type UserCredentials = { } & AuthState;

export type EmployeeState = {
    name: string,
    phone: string,
    shift: string
};


