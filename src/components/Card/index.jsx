/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 10 décembre 19h00
    CARD
*/

import React from 'react'
import '../../styles/Card.css'

function Card({image, title}) {
    return (
        <div className='CardContainer'>
            <img className='Thumb' 
                src={ image } 
                alt="logement agence KASA" width={340} height={340}/>
            <h2 className='TitreLocation'>{ title }</h2>
        </div>
    )
}

export default Card