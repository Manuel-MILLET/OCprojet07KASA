/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 20 novembre 19h00
*/

import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/index.jsx'
import logements from '../../datas/datasLogements.json'
import '../../styles/Appartements.css'

function GalleryAppartments () {
    return (
        <section className='Gallery-wrapper'>
                {logements.map((logement) => {
                    return (
                        <article key={logement.id}>
                            <Link to={`/products/${logement.id}`}>
                                <Card image={logement.cover} title={logement.title} />
                            </Link>
                        </article>
                    )
                })}
        </section>
    )
}

export default GalleryAppartments