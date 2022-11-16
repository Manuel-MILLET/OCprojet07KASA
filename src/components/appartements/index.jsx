/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 16 novembre 12h00
*/

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../Card/index.jsx'
import logements from '../../datas/logements.json'

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
    border-radius: 10px;
    overflow: hidden;
    width: 340px;
    height: 340px;
`

function Appartements () {
    return (
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
    )
}

export default Appartements