/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 16 novembre 12h00
*/

import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'

const FicheContainer = styled.main`

`

const Thumb = styled.div`
    width: 100%;
    height: 100%;
    text-decoration: none;
`

const Espace = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
`

const TitreLocation = styled.h2`
    position: absolute;
    left: 5.88%;
    right: 5.88%;
    top: 5.88%%;
    bottom: 5.88%;
    color: ${colors.white};
    font-family: 'Montserrat';
    font-size: 18px;
    text-align: start;
    font-weight:500;
    line-height: 142.6%;
    margin: 15px 20px;
`

function Card({ image, title}) {
    return (
        <main>
            <FicheContainer>
                <div>
                    <Thumb>
                        <img src={image} alt="logement agence KASA" width={340} height={340}/>
                    </Thumb>
                </div>
                <Espace><div></div></Espace>
                <TitreLocation><h2>{title}</h2></TitreLocation>
            </FicheContainer> 
        </main>
    )
}

export default Card

/*

const FicheContainer = styled.img`
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
*/