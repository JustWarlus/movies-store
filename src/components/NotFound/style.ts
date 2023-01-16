import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledNotFound = styled.div`
  min-height: 740px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  ${Typography.H1}
  color: ${Color.WHITE}
`;

export { StyledNotFound, Title };
