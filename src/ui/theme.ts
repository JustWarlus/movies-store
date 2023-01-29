import { css } from "styled-components";

export const Theme = css`
  html[theme="dark"] {
    --color-dark: #1b1b1d;
    --color-white: #ffffff;
    --color-graphit: #323537;
    --color-dark-sub: #242426;
    --color-secondary: #80858b;
  }
  html[theme="light"] {
    --color-white: #1b1b1d;
    --color-dark: #ffffff;
    --color-graphit: #f1f1f1;
    --color-dark-sub: #cec5ff;
    --color-secondary: #1b1b1d;
  }
`;
