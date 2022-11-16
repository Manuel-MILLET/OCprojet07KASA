/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 16 novembre 12h00

TEST PAGE D'ACCUEIL
*/

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../../components/Card'
import logements from '../../datas/logements.json'

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
`

const CardWrapper = styled.div`
    position: relative;
    margin: 10px;
    border-radius: 15px;
    overflow: hidden;
    width: 340px;
    height: 340px;
`

function HomeTest() {
    return (
        <main>
        <section>
        <SectionAppart>
            {logements.map((logements) => {
                return (
                    <article>
                        <Link to={`/products/${logements.id}`}>
                        <div>
                            <CardWrapper>
                                <Card image={logements.cover} title={logements.title} />
                            </CardWrapper>
                        </div>
                        </Link>
                    </article>
                )
            })}
        </SectionAppart>
        </section>
        </main>
    )
}

export default HomeTest