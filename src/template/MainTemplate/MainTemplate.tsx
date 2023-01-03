import { Header, Menu } from "../../components";
import { StyledMainTemplate, StyledOutlet } from "./style";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Menu />
      <Header />
      <StyledOutlet />
    </StyledMainTemplate>
  );
};
