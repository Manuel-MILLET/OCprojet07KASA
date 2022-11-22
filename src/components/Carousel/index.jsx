/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 22 novembre 19h00
*/
//    CAROUSEL

import React from 'react'
import { useState } from "react";
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'
import '../../styles/Carousel.css'

function Carousel ({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className='CarouselWrapper'>
            {slides.map((picture, index) => {
                return (
                    <div
                        key={index}
                        className={index === current ? 'slide slider__active-picture' : 'slide slider__inactive-picture'} >

                        {index === current && (
                            <img src={picture} alt='appartement agence KASA' className='CarouselIllustration' />
                        )}
                    </div>
                );
            })}

                {/* mise ne place des flèches si il y a plus d'une image */}

            {length > 1 ? (
                <>
                    <div className='slider__previous' onClick={prevSlide}>
                        <img src={arrowLeft} alt='flèche de défilement précédante' className='slider__previous-icon' />
                    </div>
                    <div className='slider__next' onClick={nextSlide}>
                        <img src={arrowRight} alt='flèche de défilement suivante' className='slider__next-icon' />
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default Carousel
