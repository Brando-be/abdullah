import { createGlobalStyle } from 'styled-components';
import { BaseGrotesk, SuisseWorks } from './FontFaces';

export const GlobalStyle = createGlobalStyle`

${BaseGrotesk}
${SuisseWorks}

* {
  cursor: none;
    @media (max-width: 860px) {
      cursor: auto;
  }
         ::-webkit-scrollbar {
    display: none;
  }
    user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}


html, body {
    height: 100%;
}

html {
 font-size: 62.5%;
   -webkit-font-smoothing: antialiased

 }
  body {
    margin: 0;
    padding: 0;
    font-family: Suisse Works , Serif;
    background-color: #e3e3e3;
  }

 a{
  color: inherit;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-tap-highlight-color: transparent;
 }

 a, h2, p, button {
  text-underline-offset: 3px
 }

  p, h2{
    margin: 0;
     color: inherit;
     line-height:1.2
  }

  button{
  background: none;
  color: black;
  border: none;
  padding: 0;
      font-family: Base Grotesk , sans-serif;
  }

`;
