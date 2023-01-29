import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { reset } from "./reset";
import { Theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${Color.BACKROUND};
    }
    ${Theme}
    ${reset}
`;
