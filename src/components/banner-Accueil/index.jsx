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
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    max-width: 1920px;
    width: 100%;
    height: 250px;
    margin-bottom: 50px;
`
const Illustration = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    height: 250px;
    border-radius: 25px;
`

const slogan = citation.slogan

const HomeSlogan = styled.h2`
    position: absolute;
    top: 30%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%, -50%);
    color: ${colors.white};
    font-size: 50px;
    font-weight: 300;
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