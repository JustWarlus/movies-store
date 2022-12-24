import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
`;

const Controllers = styled.div`
  width: 100%;
  display: grid;
  gap: 41px;
`;

const StyledLogo = styled(Link)`
  margin-right: 146px;
`;

export { StyledHeader, Controllers, StyledLogo };
