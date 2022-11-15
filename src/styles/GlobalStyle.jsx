/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00
*/

import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    background-color: white;
    margin: 0;
    padding: 0;
  }

  div {
    display: block;
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

  #root {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  } 
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle ;
