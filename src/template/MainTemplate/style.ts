import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledMainTemplate = styled.div`
  padding: 40px 61px 63px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 146px;
`;

const StyledOutlet = styled(Outlet)`
  grid-area: 2 / 2 / 3 / 3;
`;

export { StyledMainTemplate, StyledOutlet };
