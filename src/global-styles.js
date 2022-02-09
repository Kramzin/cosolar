import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    color: #333333;
    font-size: 16px;
}`;
