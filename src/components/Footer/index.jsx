/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 17 novembre 19h00
*/
import React from 'react'
import '../../styles/Footer.css'
import FooterLogo from '../../assets/logofooter-kasa-white.png'

function Footer() {
    const effectiveYear = new Date().getFullYear();
    return (
        <footer>
            <img src={FooterLogo} alt="logo de l'agence KASA en blanc" />
            <span>&copy;{effectiveYear} Kasa. All rights reserved</span>
        </footer>
    )
}
  
export default Footer
