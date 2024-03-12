import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/earlyaccess/jejuhallasan.css');

  @font-face {
    font-family: "CustomFont";
  }

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');


  body {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  a {
    text-decoration: none;
    color: black;
  }

  p {
    margin: 0;
  }
`;

export default GlobalStyle;
