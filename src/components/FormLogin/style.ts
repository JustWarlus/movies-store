import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, form, Typography } from "../../ui";

const StyledFrom = styled.form`
  ${form}
`;

const TitleForm = styled.h1``;
const Input = styled.input``;
const Button = styled.button``;
const Label = styled.label``;
const LabelName = styled.span``;

const ForgetPassword = styled(Link)`
  width: fit-content;
  display: block;
  margin-top: 8px;
  color: ${Color.SECONDARY};
  ${Typography.SUBLINE_SUB_BUTTON}

  &:hover {
    color: ${Color.PRIMARY_SUB};
  }
`;
const ErrorMessage = styled.span`
  ${Typography.SUBLINE_SUB_PRIMARY}
  color: ${Color.ERROR};
`;

const ChangeForm = styled.div``;
const SubText = styled.span``;
const LinkSignUp = styled(Link)``;

export {
  StyledFrom,
  TitleForm,
  Input,
  Button,
  Label,
  LabelName,
  ForgetPassword,
  ChangeForm,
  SubText,
  LinkSignUp,
  ErrorMessage,
};
