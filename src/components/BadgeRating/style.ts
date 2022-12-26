import styled from "styled-components";
import { Color, Typography } from "../../ui";

const Badge = styled.div`
  width: fit-content;
  padding: 2px 8px;
  box-sizing: border-box;
  ${Typography.SUBLINE_SUB_PRIMARY}
  color: ${Color.WHITE};
  background-color: ${Color.GREEN};
  border-radius: 6px;
`;
export { Badge };
