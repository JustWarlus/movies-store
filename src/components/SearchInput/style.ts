import styled from "styled-components";

import { Color, Typography } from "ui";

const Input = styled.input`
  width: 100%;
  padding: 14px 56px 14px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${Color.GRAPHITE};
  color: ${Color.SECONDARY};
  ${Typography.SUBLINE_SUB_PRIMARY}
  border: 2px solid ${Color.GRAPHITE};
  outline: none;

  @media (max-width: 670px) {
    padding: 8px 56px 8px 20px;
  }

  @media (max-width: 485px) {
    padding: 5px 56px 5px 20px;
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
  }
`;

const Search = styled.form`
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;

    @media (max-width: 670px) {
      top: 12px;
    }

    @media (max-width: 670px) {
      top: 8px;
    }
  }
`;

export { Input, Search };
