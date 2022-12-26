import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${Color.BLACK};
    }
    ${reset}
`;
