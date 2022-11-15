/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00
*/
import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'
import FooterLogo from '../../assets/logofooter-kasa-white.png'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 209px;
    color: ${colors.white};
    background: ${colors.black};
    margin-top: 45px;
    padding-top: 45px;
`

const FooterText = styled.span`
    color: ${colors.white};
    margin: 35px 0;
    padding: 0;
    font-size: 25px;
`

function Footer() {
    const effectiveYear = new Date().getFullYear();
    return (
        <FooterContainer>
            <img src={FooterLogo} alt="logo de l'agence KASA en blanc" />
            <FooterText>&copy;{effectiveYear} Kasa. All rights reserved</FooterText>
        </FooterContainer>
    )
  }
  
  export default Footer