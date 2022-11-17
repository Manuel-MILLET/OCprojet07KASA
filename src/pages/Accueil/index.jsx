/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 16 novembre  12h00

PAGE D'ACCUEIL
*/
import React from 'react'
import BannerAccueil from '../../components/banner-Accueil'
import ListeAppartements from '../../components/appartements'
import '../../styles/Accueil.css'

function Accueil() {
    return (
        <main className='home-wrapper'>
            <BannerAccueil />
            <section className='gallery-wrapper'>
                <ListeAppartements />
            </section>
        </main>
    )
}

export default Accueil
