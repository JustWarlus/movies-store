import React from "react";
import { FavoritesIcon, HomeIcon, SettingsIcon, TrendsIcon } from "../../assets";
import { PAGE } from "../../router";
import { StyledMenu, Navigation, StyledLink, Footer, LinkText } from "./style";

export const Menu = () => {
  return (
    <StyledMenu>
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
      <Footer>© All Rights Reserved</Footer>
    </StyledMenu>
  );
};
