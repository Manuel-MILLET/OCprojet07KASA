/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 19 novembre 19h00
*/
// RATING



import React from 'react'
import Redstar from '../../assets/redStar.svg'

import '../../styles/Host.css'

function Rating ({ rating }) {
    return (
        <div>
            <img src={ Redstar } alt='étoile rouge'/>
        </div>
    )
}

export default Rating

/*
import Greystar from '../../assets/greyStar.svg'
            <img src={ Greystar }/>
*/