import styled from "styled-components";
import { Color, Typography } from "ui";

const Button = styled.button`
  display: block;
  border: 1px solid transparent;
  padding: 8px 24px;
  box-sizing: border-box;
  border-radius: 40px;
  ${Typography.SUBLINE_SUB_BUTTON};
  color: ${Color.LIGHT};
  background: ${Color.GRAPHITE};
  cursor: pointer;
  &:hover {
    border: 1px solid ${Color.PRIMARY_SUB};
  }
`;

export { Button };
