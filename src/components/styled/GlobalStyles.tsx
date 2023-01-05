import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "../../types/styles";

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Open Sans, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  p {
    margin: 0;
  }
  * {
    box-sizing: border-box;
    transition: color 0.50s linear;
  }
  `;
