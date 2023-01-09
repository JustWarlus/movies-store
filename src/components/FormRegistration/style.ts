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
const ChangeForm = styled.div``;
const SubText = styled.span``;
const LinkSignUp = styled(Link)``;
const ErrorMessage = styled.span`
  ${Typography.SUBLINE_SUB_PRIMARY}
  color: ${Color.ERROR};
`;

export {
  StyledFrom,
  TitleForm,
  Input,
  Button,
  Label,
  LabelName,
  ChangeForm,
  SubText,
  LinkSignUp,
  ErrorMessage,
};
