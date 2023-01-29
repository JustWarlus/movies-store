import styled from "styled-components";
import { ArrowIcon } from "assets";
import { Color, Typography } from "ui";

interface IArrow {
  $isAuth?: boolean;
}

const StyledProfile = styled.div`
  min-width: 264px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Name = styled.span`
  padding: 0 20px;
  box-sizing: border-box;
  color: ${Color.WHITE};
  ${Typography.SUBLINE_SUB_PRIMARY}
`;

const Arrow = styled(ArrowIcon)<IArrow>`
  transform: ${({ $isAuth }) => ($isAuth ? "rotate(90deg)" : "")};
  margin-left: auto;
`;

const ProfileAvatar = styled.div`
  color: ${Color.WHITE};
  padding: 12px;
  box-sizing: border-box;
  background: ${Color.PRIMARY_MAIN};
  ${Typography.H3}
  border-radius: 10px;
`;

export { StyledProfile, Name, Arrow, ProfileAvatar };
