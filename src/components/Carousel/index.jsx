/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00
*/

import styled from 'styled-components'
import TestIllustration from '../../assets/test.jpg'
/*
import colors from '../../styles/colors'
*/

const BannerCarouselWrapper = styled.div`
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
const CarouselIllustration = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    height: 250px;
    border-radius: 25px;
`

function Carousel() {
    return (
        <BannerCarouselWrapper>
                <CarouselIllustration src={TestIllustration} />
        </BannerCarouselWrapper>
    )
}

export default Carousel