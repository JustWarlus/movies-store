import styled from "styled-components";

import { Color } from "../../ui";

const Input = styled.input`
  width: 62%;
  padding: 16px 16px 16px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${Color.GRAPHITE};

  &:focus {
    border: 2px solid ${Color.PRIMARY_MAIN};
  }
`;

export { Input };
