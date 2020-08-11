import { put, takeLatest, select, all, takeEvery, call } from "redux-saga/effects";
import * as appActions from "./app-actions";
import * as appSelectors from "./app-selectors";
import { Map as ImmutableMap } from "immutable";
import { Alert } from "src/utils/x-alert";
import { FORM_LABELS } from "src/homepage/homepage-constants";
import { Request } from "src/utils/x-request";
import qs from "qs";

function* onSubmitSaga({ payload: { formFields } }) {
  const initFormFields = ImmutableMap({
    [FORM_LABELS.NAME]: "",
    [FORM_LABELS.EMAIL]: "",
    [FORM_LABELS.MESSAGE]: "",
  });
  const currentFormFields = select(appSelectors.formFields);

  yield put(appActions.setFormFields({ formFields: initFormFields }));

  try {
    const request = new Request();
    const url = "https://us-west2-buzzy-cloud.cloudfunctions.net/x-baike-message";
    // const url2 = "https://nk6cz35fhi.execute-api.us-west-1.amazonaws.com";
    yield request.setUrl(url).post(formFields);
    Alert.success("Thanks. We've got your message. Please check your email.");
  } catch (err) {
    Alert.success("Oops! Error: ", err.mesage);
    yield put(appActions.setFormFields({ formFields: currentFormFields }));
  }
}

export function* onSearchWatcher() {
  yield takeLatest(appActions.ON_SUBMIT, onSubmitSaga);
}

function* onPageLoadingSaga() {
  if (localStorage.getItem("jwt")) {
    yield put(appActions.setAuth({ isAuthenticated: true }));
    yield put(appActions.setJWT({ jwt }));
  }

  // ! allow new jwt to override the old one
  const querystring = window.location.search.slice(1);
  const { jwt } = qs.parse(querystring);
  if (jwt /** && window.location.pathname === '/'  */) {
    yield put(appActions.setAuth({ isAuthenticated: true }));
    yield put(appActions.setJWT({ jwt }));
    localStorage.setItem("jwt", jwt);
    Alert.success("You have logged in!");
  }
}

export function* onPageLoadingWatcher() {
  yield takeLatest(appActions.ON_PAGE_LOADING, onPageLoadingSaga);
}
