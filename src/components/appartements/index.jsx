/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 17 novembre 19h00
*/

import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/index.jsx'
import logements from '../../datas/logements.json'
import '../../styles/Appartements.css'

function Appartements () {
    return (
        <section className='SectionAppart'>
            {logements.map((logements) => {
                return (
                    <article>
                        <Link to={`/products/${logements.id}`}>
                        <div className='CardWrapper'>
                            <Card image={logements.cover} title={logements.title} />
                        </div>
                        </Link>
                    </article>
                )
                })}
        </section>
    )
}

export default Appartements