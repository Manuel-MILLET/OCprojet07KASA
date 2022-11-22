/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 22 novembre 19h00
*/

import React from 'react'
import { Link } from 'react-router-dom'
import KasaLogo from '../../assets/logo-kasa.png'
import '../../styles/Header.css'

function Header() {
    return (
        <header className='HeaderContainer'>
            <Link to="/"><img className='HomeLogo' src={KasaLogo} alt="logo de l'agence KASA" /></Link>
                <nav>
                    <Link className='StyleLink' to='/'>Accueil</Link>
                    <Link  className='StyleLink'to='/apropos'>A Propos</Link>
                </nav>
        </header> 
    )
}

export default Header
