import styled from "styled-components";
import { Color, Typography } from "../../ui";

interface IBadge {
  rating: number;
  isTrend: boolean;
}

const Badge = styled.div<IBadge>`
  margin-right: auto;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
  padding: 2px 8px;
  box-sizing: border-box;
  ${Typography.SUBLINE_SUB_PRIMARY}
  color: ${Color.WHITE};
  background-color: ${({ rating, isTrend }) =>
    isTrend
      ? Color.PRIMARY_SUB
      : rating < 7
      ? rating < 5
        ? Color.ORANGE
        : Color.YELLOW
      : Color.GREEN};
  border-radius: 6px;
`;
export { Badge };
