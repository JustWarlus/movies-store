import React from "react";
import { FavoritesIcon, HomeIcon, SettingsIcon, TrendsIcon } from "../../assets";
import { PAGE } from "../../router";
import { StyledMenu, Navigation, StyledLink, Copirate, LinkText, StyledLogo } from "./style";
import { LogoIcon } from "../../assets";

export const Menu = () => {
  return (
    <StyledMenu>
      <StyledLogo to={PAGE.HOME}>
        <LogoIcon />
      </StyledLogo>
      <Navigation>
        <StyledLink to={PAGE.HOME}>
          <HomeIcon />
          <LinkText>Home</LinkText>
        </StyledLink>
        <StyledLink to={PAGE.TRENDS}>
          <TrendsIcon />
          <LinkText>Trends</LinkText>
        </StyledLink>
        <StyledLink to={PAGE.FAVORITES}>
          <FavoritesIcon />
          <LinkText>Favorites</LinkText>
        </StyledLink>
        <StyledLink to={PAGE.SETTINGS}>
          <SettingsIcon />
          <LinkText>Settings</LinkText>
        </StyledLink>
      </Navigation>
      <Copirate>© All Rights Reserved</Copirate>
    </StyledMenu>
  );
};
