import { css } from "styled-components";
import { Color } from "../colors";
import { Typography } from "../typography";

const input = css`
  padding: 16px 20px;
  box-sizing: border-box;
  background: ${Color.GRAPHITE};
  border: 2px solid ${Color.GRAPHITE};
  outline: none;
  border-radius: 10px;
  cursor: pointer;

  &::placeholder {
    color: ${Color.SECONDARY};
    ${Typography.SUBLINE_SUB_PRIMARY}
  }

  &:focus {
    border: 2px solid ${Color.PRIMARY_MAIN};
    color: ${Color.WHITE};
  }

  &:active {
    color: ${Color.WHITE};
  }

  &:disabled {
    background: ${Color.SECONDARY};
    color: ${Color.LIGHT};
  }
`;

export { input };
