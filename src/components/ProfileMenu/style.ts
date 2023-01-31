import styled from "styled-components";
import { Color, Typography } from "ui";

const Container = styled.div`
  position: fixed;
  top: 110px;
  right: 60px;
  z-index: 10;
  width: 270px;
  padding: 25px;
  box-sizing: border-box;
  border-radius: 15px;
  background: ${Color.GRAPHITE};
`;

const Button = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Typography.SUBLINE_BUTTON}
  color: ${Color.WHITE};
  border-radius: 15px;
  &:hover {
    background: ${Color.DARK};
  }
`;

export { Container, Button };
