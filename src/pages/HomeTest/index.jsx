/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00

TEST PAGE D'ACCUEIL
*/

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logements from '../../datas/logements.json'
import Card from '../../components/Card/Card'
/*
import ListeAppartements from '../../components/appartements'
import colors from '../../styles/colors'
*/


const SectionAppart = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-items: center;
`

function HomeTest() {
    return (
        <SectionAppart>
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
        </SectionAppart>
    )
}

export default HomeTest