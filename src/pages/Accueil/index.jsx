/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 22 novembre  19h00

PAGE D'ACCUEIL
*/
import React from 'react'
import BannerAccueil from '../../components/Banner-Accueil'
import GalleryAppartments from '../../components/GalleryAppartments'
import '../../styles/Accueil.css'

function Accueil() {
    return (
        <main className='Home-wrapper'>
            <BannerAccueil />
            <GalleryAppartments />
        </main>
    )
}

export default Accueil