/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00
*/

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../Card/Card'
import logements from '../../datas/logements.json'

const SectionAppart = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    aligitems: center;
`

function Appartements () {
    return (
        <section>
            <SectionAppart>
            {logements.map((logements) => {
                return (
                    <article>
                        <Link to={`/products/${logements.id}`}>
                            <Card image={logements.cover} title={logements.title} />
                        </Link>
                    </article>
                )
                })}
            </SectionAppart>
        </section>
    )
}

export default Appartements