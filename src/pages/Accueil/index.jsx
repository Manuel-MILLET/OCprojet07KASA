/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 24 novembre 19h00

PAGE D'ACCUEIL
*/
import React from 'react'
import BannerAccueil from '../../components/Banner-Accueil'
import GalleryAppartments from '../../components/GalleryAppartments'

function Accueil() {
    return (
        <main>
            <BannerAccueil />
            <GalleryAppartments />
        </main>
    )
}

export default Accueil