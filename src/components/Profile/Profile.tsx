import { getAvatarProfile, getNameProfile } from "helpers";
import { useAppSelector } from "store";
import { ProfileDefaultIcon } from "assets";
import { StyledProfile, Name, Arrow, ProfileAvatar } from "./style";
import { Link } from "react-router-dom";
import { PAGE } from "router";
import { useToggle } from "hooks";
import { ProfileMenu } from "components";

export const Profile = () => {
  const [isOpen, setIsOpen] = useToggle(false);
  const { isAuth, email } = useAppSelector((state) => state.account);

  if (isAuth && email) {
    const name = getNameProfile(email);
    const avatar = getAvatarProfile(email);

    return (
      <StyledProfile onClick={setIsOpen}>
        <ProfileAvatar>{avatar}</ProfileAvatar>
        <Name>{name}</Name>
        <Arrow $isAuth={isAuth} />
        <ProfileMenu isOpen={isOpen} toggleModal={setIsOpen} />
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
