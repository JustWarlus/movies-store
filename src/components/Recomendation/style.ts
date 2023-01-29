import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledRecomendation = styled.div`
  margin-top: 56px;
  width: 79%;

  @media (max-width: 1850px) {
    width: 73%;
  }

  @media (max-width: 1480px) {
    width: 64%;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const Title = styled.h2`
  ${Typography.H3}
  color: ${Color.WHITE}
`;

const MovieList = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 40px;
  overflow-x: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  &:first-child {
    transform: rotate(180deg);
  }
  &:disabled {
    svg {
      path {
        stroke: ${Color.GRAPHITE};
      }
    }
  }
`;
const ControlPanel = styled.div`
  display: flex;
  gap: 15px;
`;
const Panel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { StyledRecomendation, Title, MovieList, Button, ControlPanel, Panel };
