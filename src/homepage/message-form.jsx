import React, { useState } from "react";
import { connect } from "react-redux";
import * as appSelectors from "src/redux/app/app-selectors";
import * as appActions from "src/redux/app/app-actions";
import { FORM_LABELS } from "./homepage-constants";
import { StyledForm, LogoWrapper, StyledTextField, StyledButton } from "./message-form-styles";
import SendIcon from "@material-ui/icons/Send";
import Logo from "img/logo.svg";
import { initErrors, handleFieldOnChange, handFormOnSubmit } from "./message-form-helpers";

function MessageFormComponent({ formFields, setFormField, onSubmit }) {
  const [errors, setErrors] = useState(initErrors);
  const handleErrors = (fieldLabel, fieldErrorMessage) => {
    setErrors(errors.set(fieldLabel, fieldErrorMessage));
  };

  return (
    <StyledForm>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <StyledTextField
        variant="outlined"
        label={FORM_LABELS.NAME}
        required
        error={!!errors.get(FORM_LABELS.NAME)}
        helperText={errors.get(FORM_LABELS.NAME)}
        value={formFields.get(FORM_LABELS.NAME)}
        onChange={({ target: { value } }) =>
          handleFieldOnChange(FORM_LABELS.NAME, value, setFormField, handleErrors)
        }
      ></StyledTextField>
      <StyledTextField
        variant="outlined"
        label={FORM_LABELS.EMAIL}
        required
        value={formFields.get(FORM_LABELS.EMAIL)}
        error={!!errors.get(FORM_LABELS.EMAIL)}
        helperText={errors.get(FORM_LABELS.EMAIL)}
        onChange={({ target: { value } }) =>
          handleFieldOnChange(FORM_LABELS.EMAIL, value, setFormField, handleErrors)
        }
      ></StyledTextField>
      <StyledTextField
        required
        variant="outlined"
        label={FORM_LABELS.MESSAGE}
        multiline
        rows={4}
        error={!!errors.get(FORM_LABELS.MESSAGE)}
        helperText={errors.get(FORM_LABELS.MESSAGE)}
        value={formFields.get(FORM_LABELS.MESSAGE)}
        onChange={({ target: { value } }) =>
          handleFieldOnChange(FORM_LABELS.MESSAGE, value, setFormField, handleErrors)
        }
      ></StyledTextField>
      <StyledButton
        variant="outlined"
        color="primary"
        endIcon={<SendIcon />}
        onClick={() => handFormOnSubmit(formFields, onSubmit)}
      >
        Send
      </StyledButton>
    </StyledForm>
  );
}

function mapStateToProps(state) {
  return {
    formFields: appSelectors.formFields(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFormField: (fieldLabel, fieldValue) => {
      dispatch(appActions.setFormField({ fieldLabel, fieldValue }));
    },
    onSubmit: (formFields) => dispatch(appActions.onSubmit({ formFields })),
  };
}

export const MessageForm = connect(mapStateToProps, mapDispatchToProps)(MessageFormComponent);
