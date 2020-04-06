import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto/Roboto-Regular.ttf'); 
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  html {
    margin: 0;
    padding: 0;
    display: block;
  }
  body {
    margin: 0;
    padding: 0;
    display: block;
    background-color: rgb(0, 174, 204);
    font-family: 'Roboto', sans-serif;
  }
`

export default GlobalStyle;

