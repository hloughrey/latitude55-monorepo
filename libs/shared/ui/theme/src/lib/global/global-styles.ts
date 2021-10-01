import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`;
