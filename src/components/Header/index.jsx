/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00
*/

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../styles/Atoms'
import KasaLogo from '../../assets/logo-kasa.png'

const HeaderContainer = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 84%;
    height: 68px;
    margin: 40px 100px;
    padding: 0;
`

const HomeLogo = styled.img`
    width: 210.32px;
    height: 68px;
`

function Header() {
    return (
        <header>
        <HeaderContainer>
            <Link to="/"><HomeLogo src={KasaLogo} alt="logo de l'agence KASA" /></Link>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/apropos">A Propos</StyledLink>
            </div>
        </HeaderContainer>
        </header> 
    )
}

export default Header