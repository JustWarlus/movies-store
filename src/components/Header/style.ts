import styled from "styled-components";
import { Indents } from "../../ui";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  gap: 41px;
  ${Indents.LEVEL_2}
  grid-area: 1 / 2 / 2 / 3;
`;

export { StyledHeader };
