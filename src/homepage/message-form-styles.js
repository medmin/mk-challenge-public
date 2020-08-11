import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CenteredFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 500px;
`;

export const LogoWrapper = styled(CenteredFlex)`
  width: 100%;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  margin-top: 10px !important;
`;

export const StyledButton = styled(Button)`
  margin-top: 10px !important;
`;
