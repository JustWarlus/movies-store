import { css } from "styled-components";
import { Color } from "../colors";
import { Typography } from "../typography";

const Primary = css`
  display: block;
  padding: 16px 0;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${Color.PRIMARY_MAIN};
  ${Typography.SUBLINE_BUTTON}
  color: ${Color.WHITE};
  border: none;

  &:hover {
    background: ${Color.PRIMARY_SUB};
  }
  &:disabled {
    background: ${Color.SECONDARY};
    color: ${Color.LIGHT};
  }
`;

const Secondary = css`
  display: block;
  padding: 16px 0;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${Color.GRAPHITE};
  ${Typography.SUBLINE_BUTTON}
  color: ${Color.WHITE};
  border: none;

  &:hover {
    color: ${Color.LIGHT};
  }
  &:disabled {
    background: ${Color.SECONDARY};
    color: ${Color.LIGHT};
  }
`;

export const StyledButton = { Primary, Secondary };
