import styled from "styled-components";
import { Color } from "ui";

const StyledBurger = styled.div`
  background: ${Color.PRIMARY_SUB};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;

  svg {
    @media (max-width: 670px) {
      height: 24px;
      width: 24px;
    }

    @media (max-width: 385px) {
      height: 20px;
      width: 20px;
    }
  }
`;

export { StyledBurger };
