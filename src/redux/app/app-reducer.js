import { handleActions } from "redux-actions";
import * as appActions from "./app-actions";
import { Record, Map } from "immutable";
import { FORM_LABELS } from "src/homepage/homepage-constants";

const initState = new Record({
  formFields: Map({
    [FORM_LABELS.NAME]: "",
    [FORM_LABELS.EMAIL]: "",
    [FORM_LABELS.MESSAGE]: "",
  }),
  isAuthenticated: false,
  jwt: null,
})();

export const appReducer = handleActions(
  {
    [appActions.SET_FORM_FIELD]: (state, action) => {
      const { fieldLabel, fieldValue } = action.payload;
      return state.setIn(["formFields", fieldLabel], fieldValue);
    },

    [appActions.SET_FORM_FIELDS]: (state, action) => {
      const { formFields } = action.payload;
      return state.set("formFields", formFields);
    },

    [appActions.SET_AUTH]: (state, action) => {
      const { isAuthenticated } = action.payload;
      return state.set("isAuthenticated", isAuthenticated);
    },

    [appActions.SET_JWT]: (state, action) => {
      const { jwt } = action.payload;
      return state.set("jwt", jwt);
    },
  },
  initState
);
