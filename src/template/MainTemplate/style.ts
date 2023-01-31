import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const StyledMainTemplate = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: 70px;
  grid-row-gap: 10px;

  padding: 40px 61px 63px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 670px) {
    padding: 48px 40px;
  }

  @media (max-width: 485px) {
    padding: 85px 16px 48px;
  }
`;

const StyledLogo = styled(Link)`
  grid-area: 1 / 1 / 2 / 2;
  display: block;
  margin-top: 8px;

  @media (max-width: 900px) {
    visibility: hidden;
  }
`;

const StyledOutlet = styled(Outlet)`
  grid-area: 2 / 2 / 3 / 3;
`;

export { StyledMainTemplate, StyledOutlet, StyledLogo };
