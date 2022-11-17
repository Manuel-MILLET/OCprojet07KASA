/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 17 novembre 19h00
*/

import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLink } from '../../styles/Atoms'
import KasaLogo from '../../assets/logo-kasa.png'
import '../../styles/Header.css'

function Header() {
    return (
        <header className='HeaderContainer'>
            <Link to="/"><img classeName='HomeLogo' src={KasaLogo} alt="logo de l'agence KASA" /></Link>
                <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/apropos">A Propos</StyledLink>
                </nav>
        </header> 
    )
}

export default Header