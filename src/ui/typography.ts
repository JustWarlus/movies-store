import { css } from "styled-components";
import { Media } from "./mediaBreackPoints";

const H1 = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;

  ${Media.S} {
    font-size: 32px;
    line-height: 48px;
  }
  ${Media.XSS} {
    font-size: 28px;
    line-height: 42px;
  }
`;

const H2 = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  ${Media.S} {
    font-size: 24px;
    line-height: 36px;
  }
  ${Media.XSS} {
    font-size: 20px;
    line-height: 36px;
  }
`;

const H3 = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;

  ${Media.S} {
    font-size: 20px;
    line-height: 32px;
  }
  ${Media.XSS} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const SUBLINE_PRIMARY = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;

  ${Media.S} {
    font-size: 18px;
    line-height: 24px;
  }
`;

const SUBLINE_SUB_PRIMARY = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const SUBLINE_BUTTON = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const BODYTEXT = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Typography = {
  H1,
  H2,
  H3,
  SUBLINE_PRIMARY,
  SUBLINE_SUB_PRIMARY,
  SUBLINE_BUTTON,
  BODYTEXT,
};
