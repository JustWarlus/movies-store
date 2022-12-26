import styled from "styled-components";
import { ArrowIcon } from "../../assets";
import { Color, Typography } from "../../ui";

const StyledProfile = styled.div`
  min-width: 264px;
  display: flex;
  align-items: center;
`;
const Name = styled.span`
  padding: 0 20px;
  box-sizing: border-box;
  color: ${Color.WHITE};
  ${Typography.SUBLINE_SUB_PRIMARY}
`;

const Arrow = styled(ArrowIcon)`
  margin-left: auto;
`;

export { StyledProfile, Name, Arrow };
