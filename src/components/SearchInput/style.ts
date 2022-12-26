import styled from "styled-components";

import { Color, Typography } from "../../ui";

const Input = styled.input`
  width: 100%;
  padding: 16px 16px 16px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${Color.GRAPHITE};
  color: ${Color.SECONDARY};
  ${Typography.SUBLINE_SUB_PRIMARY}
  border: 2px solid ${Color.GRAPHITE};
  outline: none;

  &:focus {
    border: 2px solid ${Color.PRIMARY_MAIN};
    color: ${Color.WHITE};
  }

  &:active {
    color: ${Color.WHITE};
  }
  &:disabled {
    background: ${Color.SECONDARY};
  }
`;

export { Input };
