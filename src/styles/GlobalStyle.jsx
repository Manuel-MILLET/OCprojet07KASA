/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 10 novembre 12h00
*/

import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    background-color: 'white';
    margin: 0;
    padding: 0;
    max-width: 1450px;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  img {
    object-fit: cover;
  }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle ;
