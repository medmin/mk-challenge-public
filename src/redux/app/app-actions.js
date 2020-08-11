import { createAction } from "redux-actions";

export const SET_FORM_FIELD = "APP.SET_FORM_FIELD";
export const setFormField = createAction(SET_FORM_FIELD);

export const SET_FORM_FIELDS = "APP.SET_FORM_FIELDS";
export const setFormFields = createAction(SET_FORM_FIELDS);

export const ON_SUBMIT = "APP.ON_SUBMIT";
export const onSubmit = createAction(ON_SUBMIT);

export const SET_AUTH = "APP.SET_AUTH";
export const setAuth = createAction(SET_AUTH);

export const SET_JWT = "APP.SET_JWT";
export const setJWT = createAction(SET_JWT);

export const ON_PAGE_LOADING = "APP.ON_PAGE_LOADING";
export const onPageLoading = createAction(ON_PAGE_LOADING);
