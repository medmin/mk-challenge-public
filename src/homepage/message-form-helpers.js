import { Map as ImmutableMap } from "immutable";
import Schema from "async-validator";
import { FORM_LABELS } from "./homepage-constants";
import { ERROR_MESSAGES } from "src/constants";
import { GOOGLE_SITE_KEY, RECAPTCHA_ACTIONS } from "src/constants";
import { Alert } from "src/utils/x-alert";

const descriptor = {
  [FORM_LABELS.NAME]: {
    type: "string",
    required: true,
    pattern: /^[a-zA-Z][\w\s]{6,48}[a-zA-Z0-9]$$/, // ! starts with letters, and only allow alphanumeric and underscore , 8-50 chars long
    message:
      "Name is required, and it starts with letters, and ends with only alphanumeric and underscore. Whitespaces are allowed in the middle. 8-50 chars long.",
  },
  [FORM_LABELS.EMAIL]: {
    type: "email",
    required: true,
    message: "Email is required. And it should be an email",
  },
  [FORM_LABELS.MESSAGE]: {
    type: "string",
    required: true,
    message: "Message is required",
  },
};

export const handleFieldOnChange = async (fieldLabel, fieldValue, setFormField, handleErrors) => {
  const validator = new Schema({ [fieldLabel]: descriptor[fieldLabel] });
  let errMsg = null;
  try {
    await validator.validate({ [fieldLabel]: fieldValue.trim() });
  } catch (err) {
    errMsg = descriptor[fieldLabel]["message"];
  }

  setFormField(fieldLabel, fieldValue);
  handleErrors(fieldLabel, errMsg);
};

export const initErrors = ImmutableMap({
  [FORM_LABELS.NAME]: "",
  [FORM_LABELS.EMAIL]: "",
  [FORM_LABELS.MESSAGE]: "",
});

export const handFormOnSubmit = async (formFields, onSubmit) => {
  let googleToken;
  try {
    googleToken = await grecaptcha?.execute(GOOGLE_SITE_KEY, {
      action: RECAPTCHA_ACTIONS.SUBMIT_MESSAGE,
    });

    if (!googleToken) throw new Error(ERROR_MESSAGES.ARE_U_HUMAN);
  } catch (err) {
    Alert.error(ERROR_MESSAGES.ARE_U_HUMAN);
    return;
  }

  const validator = new Schema(descriptor);
  const fields = formFields.toJS();
  Object.entries(fields).forEach(([field, value]) => {
    fields[field] = value.trim();
  });
  try {
    await validator.validate({ ...fields });
  } catch (err) {
    Alert.error(ERROR_MESSAGES.VALIDATION_ERROR);
    return;
  }

  onSubmit({ ...fields, googleToken });
};
