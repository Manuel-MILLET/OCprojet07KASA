/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 30 novembre 19h00

PAGE D'ACCUEIL
*/
import React from 'react'
import Banner from '../../components/Banner'
import GalleryAppartments from '../../components/GalleryAppartments'
import HomeIllustration from '../../assets/banner-header-sombre.png'
import citation from '../../datas/ListeExpressions'

const slogan = citation.slogan
const textAlt = 'Paysage de bord de mer'

function Accueil() {
    return (
        <main>
            <Banner bannerImage={ HomeIllustration } slogan={ slogan } textAlt={ textAlt }/>
            <GalleryAppartments />
        </main>
    )
}

export default Accueil