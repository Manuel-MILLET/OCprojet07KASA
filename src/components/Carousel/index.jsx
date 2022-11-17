/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 17 novembre 19h00

    CAROUSEL
*/

import TestIllustration from '../../assets/test.jpg'
import '../../styles/Carousel.css'

function Carousel() {
    return (
        <div className='CarouselWrapper'>
            <img className='CarouselIllustration' src={TestIllustration} alt="appartement agence KASA" />
        </div>
    )
}

export default Carousel