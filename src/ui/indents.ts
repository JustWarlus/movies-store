import { css } from "styled-components";
import { Media } from "./mediaBreackPoints";

const LEVEL_1 = css`
  margin-bottom: 64px;
  ${Media.S} {
    margin-bottom: 56px;
  }
  ${Media.XSS} {
    margin-bottom: 48px;
  }
`;
const LEVEL_2 = css`
  margin-bottom: 56px;
  ${Media.S} {
    margin-bottom: 48px;
  }
  ${Media.XSS} {
    margin-bottom: 40px;
  }
`;

const LEVEL_3 = css`
  margin-bottom: 48px;
  ${Media.XSS} {
    margin-bottom: 40px;
  }
`;

const LEVEL_4 = css`
  margin-bottom: 40px;
  ${Media.XSS} {
    margin-bottom: 32px;
  }
`;

const LEVEL_5 = css`
  margin-bottom: 32px;
  ${Media.XSS} {
    margin-bottom: 24px;
  }
`;

const LEVEL_6 = css`
  margin-bottom: 24px;
  ${Media.XSS} {
    margin-bottom: 20px;
  }
`;

const LEVEL_7 = css`
  margin-bottom: 20px;
  ${Media.XSS} {
    margin-bottom: 16px;
  }
`;

const LEVEL_8 = css`
  margin-bottom: 16px;
`;

const LEVEL_9 = css`
  margin-bottom: 8px;
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
