/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 16 novembre  12h00

PAGE D'ACCUEIL
*/
import React from 'react'
import styled from 'styled-components'
import BannerAccueil from '../../components/banner-Accueil'
import ListeAppartements from '../../components/appartements'
import colors from '../../styles/colors'

const HomeWrapper = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1240px;
`
const GalleryWrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: ${colors.greyhyperlight};
    border-radius: 20px;
    margin: 40px;
    padding: 40px;
    max-width: 1920px;
`

function Accueil() {
    return (
        <main>
        <HomeWrapper>
            <header>
            <BannerAccueil />
            </header>
            <section>
            <GalleryWrapper>
                    <ListeAppartements />
            </GalleryWrapper>  
            </section>
        </HomeWrapper>
        </main>
    )
}

export default Accueil