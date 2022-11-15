/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 13 novembre 19h00
*/

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../styles/Atoms'
import KasaLogo from '../../assets/logo-kasa.png'

const HomeLogo = styled.img`
    width: 200px;
    height: 65px;
    border-radius: 0;
`

const HeaderContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 60px 20px;
    padding: 0;
   `

function Header() {
    return ( 
        <main className='mainPage'>
        <HeaderContainer>
            <Link to="/"><HomeLogo src={KasaLogo} alt="logo de l'agence KASA" /></Link>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/apropos">A Propos</StyledLink>
            </div>
        </HeaderContainer>
        </main>
    )
}

export default Header