import React from "react";
import { Outlet } from "react-router-dom";
import { LogoIcon } from "assets";
import { PAGE } from "router";
import { Template, StyledLogo, Copyrigth, StyledOutlet } from "./style";

export const AuthorizationTemplate = () => {
  return (
    <Template>
      <StyledLogo to={PAGE.HOME}>
        <LogoIcon />
      </StyledLogo>
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
      <Copyrigth>© All Rights Reserved</Copyrigth>
    </Template>
  );
};
