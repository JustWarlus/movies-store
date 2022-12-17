import { css } from "styled-components";
import { Media } from "./mediaBreackPoints";

const LEVEL_1 = css`
  margin-top: 64px;

  ${Media.S} {
    margin-top: 56px;
  }
  ${Media.XSS} {
    margin-top: 48px;
  }
`;
const LEVEL_2 = css`
  margin-top: 56px;
  ${Media.S} {
    margin-top: 48px;
  }
  ${Media.XSS} {
    margin-top: 40px;
  }
`;

const LEVEL_3 = css`
  margin-top: 48px;
  ${Media.XSS} {
    margin-top: 40px;
  }
`;

const LEVEL_4 = css`
  margin-top: 40px;
  ${Media.XSS} {
    margin-top: 32px;
  }
`;

const LEVEL_5 = css`
  margin-top: 32px;
  ${Media.XSS} {
    margin-top: 24px;
  }
`;

const LEVEL_6 = css`
  margin-top: 24px;
  ${Media.XSS} {
    margin-top: 20px;
  }
`;

const LEVEL_7 = css`
  margin-top: 20px;
  ${Media.XSS} {
    margin-top: 16px;
  }
`;

const LEVEL_8 = css`
  margin-top: 16px;
`;

const LEVEL_9 = css`
  margin-top: 8px;
`;

export const Indents = {
  LEVEL_1,
  LEVEL_2,
  LEVEL_3,
  LEVEL_4,
  LEVEL_5,
  LEVEL_6,
  LEVEL_7,
  LEVEL_8,
  LEVEL_9,
};
