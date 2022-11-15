/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 11 novembre 19h00
*/

import { Link } from 'react-router-dom'
import colors from './colors'
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
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`
export const StyledLink = styled(Link)`
  padding: 10px 15px 10px 0;
  color: red;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
`