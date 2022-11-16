/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00
*/

import styled from 'styled-components'
import HomeIllustration from '../../assets/banner-header-sombre.png'
import citation from "../../datas/aboutExpressions"
import colors from '../../styles/colors'

const BannerHomeWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    max-width: 1920px;
    width: 100%;
    height: 223px;
    margin-bottom: 30px;
`
const Illustration = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 223px;
    margin-left: 5%;
    margin-right: 5%;
    border-radius: 25px;
`

const slogan = citation.slogan

const HomeSlogan = styled.h2`
    position: absolute;
    top: 24%;
    left: 4%;
    color: ${colors.white};
    text-align: center;
    font-family: 'Montserrat';
    font-size: 40px;
    font-weight: 500;
    width: 80%;
`

function BannerAccueil() {
    return (
        <BannerHomeWrapper>
                <Illustration src={HomeIllustration} />
                <HomeSlogan>{slogan}</HomeSlogan>
        </BannerHomeWrapper>
    )
}

export default BannerAccueil