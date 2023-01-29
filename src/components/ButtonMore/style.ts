import styled from "styled-components";
import { Color, Typography } from "ui";

const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 8px 24px;
  box-sizing: border-box;
  border-radius: 40px;
  ${Typography.SUBLINE_SUB_BUTTON};
  color: ${Color.LIGHT};
  background: ${Color.GRAPHITE};
  cursor: pointer;
`;

export { Button };
