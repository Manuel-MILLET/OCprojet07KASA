/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00
*/

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../styles/Atoms'
import KasaLogo from '../../assets/logo-kasa.png'

const HomeLogo = styled.img`
    width: 200px;
    height: 65px;
`

const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px;
    padding: 0;
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