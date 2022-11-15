/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00
*/

import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'

const FicheContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    height: 225px;
    border-radius: 15px;
    margin-bottom: 20px;
    animation: fadeInUp 600ms ease-in-out;
    overflow: hidden;
`

const Espace = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`

const TitreFiche = styled.h2`
    position: absolute;
    bottom: 0;
    color: ${colors.white};
    font-size: 18px;
    font-weight:500;
    margin: 15px 20px;
`

function Card({ image, title}) {
    return (
        <div>
        <FicheContainer>
                <img src={image} alt="" />
                <Espace><div></div></Espace>
                <TitreFiche>
                    <h2>{title}</h2>
                </TitreFiche>
        </FicheContainer>  
        </div>
    )
}

export default Card