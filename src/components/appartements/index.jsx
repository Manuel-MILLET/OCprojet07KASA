/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 13 novembre 22h00
*/

import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import logements from '../../datas/logements.json'

function Appartements () {
    return (
        <section>
            {logements.map((logements) => {
                return (
                    <article>
                        <Link to={`/products/${logements.id}`}>
                            <Card image={logements.cover} title={logements.title} />
                        </Link>
                    </article>
                )
                })}
        </section>
    )
}

export default Appartements