import { css } from "styled-components";
import { Color } from "../colors";
import { Typography } from "../typography";
import { StyledButton } from "./button";
import { input } from "./input";

export const form = css`
  padding: 40px;
  box-sizing: border-box;
  background: ${Color.DARK};
  border-radius: 10px;
  min-width: 574px;

  @media (max-width: 700px) {
    min-width: 0;
    width: 100%;
  }

  button {
    ${StyledButton.Primary}
    width: 100%;
    margin-top: 40px;
  }

  h1 {
    ${Typography.H2}
    margin-bottom: 16px;
  }

  label {
    display: block;
    margin-top: 24px;

    span {
      display: block;
      margin-bottom: 8px;
      ${Typography.SUBLINE_BUTTON}
    }

    input {
      ${input}
      width: 100%;
    }
  }

  div {
    ${Typography.SUBLINE_SUB_BUTTON}
    display: flex;
    justify-content: center;
    gap: 3px;
    margin-top: 32px;

    span {
      color: ${Color.SECONDARY};
    }
    a {
      color: ${Color.PRIMARY_MAIN};
      &:hover {
        color: ${Color.PRIMARY_SUB};
      }
    }
  }
`;
