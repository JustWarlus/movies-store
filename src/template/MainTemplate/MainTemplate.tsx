import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Menu } from "../../components";
import { StyledMainTemplate, Content } from "./style";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <Content>
        <Menu />
        <Outlet />
      </Content>
    </StyledMainTemplate>
  );
};
