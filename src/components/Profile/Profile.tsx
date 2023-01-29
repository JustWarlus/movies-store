import { getAvatarProfile, getNameProfile } from "helpers";
import { Link } from "react-router-dom";
import { PAGE } from "router";
import { logOutUser } from "store";
import { useAppDispatch, useAppSelector } from "store";
import { ProfileDefaultIcon } from "assets";
import { StyledProfile, Name, Arrow, ProfileAvatar } from "./style";

export const Profile = () => {
  const { isAuth, email } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  if (isAuth && email) {
    const name = getNameProfile(email);
    const avatar = getAvatarProfile(email);

    const logOut = () => {
      dispatch(logOutUser());
    };

    return (
      <StyledProfile onClick={logOut}>
        <ProfileAvatar>{avatar}</ProfileAvatar>
        <Name>{name}</Name>
        <Arrow $isAuth={isAuth} />
      </StyledProfile>
    );
  }

  return (
    <Link to={PAGE.AUTHORIZATION}>
      <StyledProfile>
        <ProfileDefaultIcon />
        <Name>Sign in</Name>
        <Arrow />
      </StyledProfile>
    </Link>
  );
};
