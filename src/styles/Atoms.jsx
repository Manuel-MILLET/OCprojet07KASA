/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00
*/

import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid var(--redprimary);
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`
export const StyledLink = styled(Link)`
  width: 309px;
  height: 34px;
  color: var(--redprimary);
  font-family: 'Montserrat';
  font-size: 24px;
  line-height: 34.22px;
  font-weight: 500;
  text-align: right;
  padding: 10px 15px 10px 0;
  text-decoration: none;
`

export const StyledLinkRetour = styled(Link)`
  width: 600px;
  height: 40px;
  color: var(--redprimary);
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
`
