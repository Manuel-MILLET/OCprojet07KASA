/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 10 décembre 19h00
        PAGE D'ACCUEIL
*/
import React from 'react'
import Banner from '../../components/Banner'
import GalleryAppartments from '../../components/GalleryAppartments'
import HomeIllustration from '../../assets/banner-header-sombre.png'
import citation from '../../datas/ListeExpressions'

function Accueil() {
    const slogan = citation.slogan
    const textAlt = 'Paysage de bord de mer'

    return (
        <main>
            <Banner bannerImage={ HomeIllustration } 
                    slogan={ slogan } 
                    textAlt={ textAlt }/>
            <GalleryAppartments />
        </main>
    )
}

export default Accueil