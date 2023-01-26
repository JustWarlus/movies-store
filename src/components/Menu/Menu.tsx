import React from "react";
import { FavoritesIcon, HomeIcon, SettingsIcon, TrendsIcon } from "../../assets";
import { PAGE } from "../../router";
import { StyledMenu, Navigation, Copirate, LinkText } from "./style";
import { CustomNavLink } from "components/CustomNavLink/CustomNavLink";

interface IProps {
  handleClose: () => void;
}

export const Menu = ({ handleClose }: IProps) => {
  return (
    <StyledMenu>
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
      </Navigation>
      <Copirate>© All Rights Reserved</Copirate>
    </StyledMenu>
  );
};
