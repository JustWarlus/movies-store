import React from "react";
import { ProfileDefaultIcon } from "../../assets";
import { StyledProfile, Name, Arrow } from "./style";

export const Profile = () => {
  return (
    <StyledProfile>
      <ProfileDefaultIcon />
      <Name>Sign in</Name>
      <Arrow />
    </StyledProfile>
  );
};
