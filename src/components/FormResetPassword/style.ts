import styled from "styled-components";
import { form, Typography, Color } from "ui";

const Form = styled.form`
  ${form}
`;

const Label = styled.label``;
const LabelName = styled.span``;
const Input = styled.input``;
const Button = styled.button``;

const ErrorMessage = styled.span`
  ${Typography.SUBLINE_SUB_PRIMARY}
  color: ${Color.ERROR};
`;

export { Form, Input, LabelName, Label, ErrorMessage, Button };
