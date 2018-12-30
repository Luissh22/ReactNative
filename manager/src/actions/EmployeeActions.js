// @flow

import type { Action } from "../types";
import { EMPLOYEE_FORM_UPDATE } from "./types";

export type FormUpdate = {
    prop: string,
    value: string
};

export const employeeFormUpdate =
    ({ prop, value }: {prop: string, value: string} ): Action<FormUpdate> => {
    return {
        type: EMPLOYEE_FORM_UPDATE,
        payload: { prop, value }
    };
};