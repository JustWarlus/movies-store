import { css } from "styled-components";

export const reset = css`
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  ul[class],
  ol[class] {
    padding: 0;
    list-style: none;
  }
  body {
    min-height: 100vh;
  }
  a {
    text-decoration-skip-ink: auto;
    text-decoration: none;
  }
`;
