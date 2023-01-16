import { NotFoundIcon } from "assets";

import { StyledNotFound, Title } from "./style";

export const NotFound = () => {
  return (
    <StyledNotFound>
      <Title>404</Title>
      <NotFoundIcon />
    </StyledNotFound>
  );
};
