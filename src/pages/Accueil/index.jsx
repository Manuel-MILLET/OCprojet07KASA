/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 13 novembre 22h00

PAGE D'ACCUEIL
*/
import React from 'react'
import styled from 'styled-components'
import BannerAccueil from '../../components/banner-Accueil'
import ListeAppartements from '../../components/appartements'
import colors from '../../styles/colors'

const HomeWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: ${colors.greylight};
    border-radius: 20px;
`

function Accueil() {
    return (
        <main>
            <HomeWrapper>
                <BannerAccueil />
                <ListeAppartements />
            </HomeWrapper>
        </main>
    )
}

export default Accueil