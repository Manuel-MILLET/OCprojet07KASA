/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 22 novembre 19h00
*/
// RATING

import React from 'react'
import Redstar from '../../assets/redStar.svg'
import Greystar from '../../assets/greyStar.svg'
import '../../styles/Host.css'

function Rating ({ rating }) {
    const starsIndice = [1, 2, 3, 4, 5];

    return (
        <div className='host-star'>
            {starsIndice.map((star) =>
                rating >= star ? (
                    <img className='size-star' key={star.toString()}
                        src={ Redstar }
                        alt='étoile rouge'/>
                    ) : (
                    <img className='size-star' key={star.toString()} 
                        src={ Greystar } 
                        alt='étoile grise'/>
                )
            )}
        </div>
    )
}

export default Rating