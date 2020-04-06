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
    background-color: #C5D5D6;
    font-family: 'Roboto', sans-serif;
  }
`

export default GlobalStyle;