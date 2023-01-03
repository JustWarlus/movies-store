import { Link } from "react-router-dom";
import styled from "styled-components";

const Template = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 48px 62px;
  box-sizing: border-box;
  background: url(backroundSign);
  color: white;
`;

const StyledLogo = styled(Link)``;
const Copyrigth = styled.div`
  width: 100%;
  text-align: center;
`;
const StyledOutlet = styled.div`
  margin: 0 auto;
`;

export { Template, StyledLogo, Copyrigth, StyledOutlet };
