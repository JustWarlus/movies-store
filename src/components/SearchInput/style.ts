import styled from "styled-components";

import { Color, Typography } from "../../ui";

const Input = styled.input`
  width: 100%;
  padding: 16px 56px 16px 20px;
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

const Search = styled.div`
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    top: 19px;
    right: 16px;
    cursor: pointer;
  }
`;

export { Input, Search };
