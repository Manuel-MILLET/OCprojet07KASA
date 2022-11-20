/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 17 novembre 19h00

    CAROUSEL
*/

import React from 'react'
import '../../styles/Carousel.css'

function Carousel({ image }) {
    return (
        <div className='CarouselWrapper'>
            <img className='CarouselIllustration' src={ image } alt="appartement agence KASA" />
        </div>
    )
}

export default Carousel
