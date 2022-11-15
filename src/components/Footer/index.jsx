/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 11 novembre 19h00
*/
import React from 'react'
import styled from 'styled-components'
import FooterLogo from '../../assets/logofooter-kasa-white.png'
import colors from '../../styles/colors'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
    color: ${colors.white};
    background: ${colors.black};
    margin-top: 45px;
    padding-top: 45px;
`

const FooterText = styled.p`
    color: ${colors.white};
    height: 60px;
    margin: 5px 2px 6px 2px;
    padding: 5px 2px 6px 2px;
    font-size: 25px;
`

function Footer() {
    const effectiveYear = new Date().getFullYear();
    return (
        <FooterContainer>
            <img src={FooterLogo} alt="logo de l'agence KASA en blanc" />
            <FooterText>
                <p>&copy;{effectiveYear} Kasa. All rights reserved</p>
            </FooterText>
        </FooterContainer>
    )
  }
  
  export default Footer

/*
const FooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    color: white;
    background: black;
    height: 209px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

*/