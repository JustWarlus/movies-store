import styled from "styled-components";
import { Color, Typography } from "../../ui";

interface IBadge {
  rating: number;
}

const Badge = styled.div<IBadge>`
  width: fit-content;
  padding: 2px 8px;
  box-sizing: border-box;
  ${Typography.SUBLINE_SUB_PRIMARY}
  color: ${Color.WHITE};
  background-color: ${({ rating }) =>
    rating < 7 ? (rating < 5 ? Color.ORANGE : Color.YELLOW) : Color.GREEN};
  border-radius: 6px;
`;
export { Badge };
