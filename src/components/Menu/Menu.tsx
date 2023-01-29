import React from "react";
import { FavoritesIcon, HomeIcon, ProfileMenuIcon, SettingsIcon, TrendsIcon } from "assets";
import { PAGE } from "router";
import { StyledMenu, Navigation, Copirate, LinkText } from "./style";
import { CustomNavLink } from "components";
import { useWindowSize } from "hooks";

interface IProps {
  handleClose: () => void;
  isMenuOpen: boolean;
}

export const Menu = ({ handleClose, isMenuOpen }: IProps) => {
  const { width = 0 } = useWindowSize();
  return (
    <StyledMenu $isMenuOpen={isMenuOpen}>
      <Navigation>
        <CustomNavLink onClick={handleClose} to={PAGE.HOME}>
          <HomeIcon />
          <LinkText>Home</LinkText>
        </CustomNavLink>
        <CustomNavLink onClick={handleClose} to={PAGE.TRENDS}>
          <TrendsIcon />
          <LinkText>Trends</LinkText>
        </CustomNavLink>
        <CustomNavLink onClick={handleClose} to={PAGE.FAVORITES}>
          <FavoritesIcon />
          <LinkText>Favorites</LinkText>
        </CustomNavLink>
        <CustomNavLink onClick={handleClose} to={PAGE.SETTINGS}>
          <SettingsIcon />
          <LinkText>Settings</LinkText>
        </CustomNavLink>
        {width < 900 && (
          <CustomNavLink onClick={handleClose} to={PAGE.AUTHORIZATION}>
            <ProfileMenuIcon />
            <LinkText>Profile</LinkText>
          </CustomNavLink>
        )}
      </Navigation>
      <Copirate>© All Rights Reserved</Copirate>
    </StyledMenu>
  );
};
