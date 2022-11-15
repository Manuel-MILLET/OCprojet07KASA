/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 11 novembre 19h00
*/

import styled from 'styled-components'
import AproposIllustration from '../../assets/apropos.png'
/*
import colors from '../../styles/colors'
*/

const BannerAproposWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    max-width: 1920px;
    width: 100%;
    margin-bottom: 50px;
`

const Illustration = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 5%;
    width: 90%;
    height: 250px;
    border-radius: 25px;
`

function BannerApropos() {
    return (
        <BannerAproposWrapper>
            <Illustration src={AproposIllustration} />
        </BannerAproposWrapper>
    )
}

export default BannerApropos