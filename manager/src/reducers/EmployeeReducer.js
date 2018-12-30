// @flow
import type {Action, EmployeeState} from "../types";
import type {FormUpdate} from "../actions";
import {EMPLOYEE_FORM_UPDATE} from "../actions/types";

const INITIAL_STATE: EmployeeState = {
    name: '',
    phone: '',
    shift: ''
};

export default (state: EmployeeState = INITIAL_STATE, action: Action<FormUpdate>): EmployeeState => {

    switch (action.type) {
        case EMPLOYEE_FORM_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        default:
            return state;
    }
}