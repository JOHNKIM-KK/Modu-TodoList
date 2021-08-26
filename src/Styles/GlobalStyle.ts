import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
    font-family: "Hi Melody", cursive;
  }
`;

export default GlobalStyle;
