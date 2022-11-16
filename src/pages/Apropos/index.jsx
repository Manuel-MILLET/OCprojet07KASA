/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00

PAGE A PROPOS
*/
import React from 'react'
import styled from 'styled-components'
import BannerApropos from '../../components/banner-Apropos'
import citation from '../../datas/aboutExpressions'
import colors from '../../styles/colors'

const txtfiabilite = citation.fiabilite
const txtrespect = citation.respect
const txtservice = citation.service
const txtresponsabilite = citation.responsabilite

const CitationWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
    border-radius: 20px;
    margin-top: 270px;
`

const BoutonAcc = styled.button`
    color: ${colors.white};
    background-color: ${colors.redprimary};
    cursor: pointer;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 500;
    width: 90%;
    height: 47px;
    padding-left: 18px;
    margin-top: 18px;
    text-align: left;
    border-radius: 5px;
    border: none;
    transition: 0.5s;
`

const MentionsTexte = styled.p`
    color: ${colors.redprimary};
    background-color: ${colors.greyhyperlight};
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 400;
    width: 90%;
    height: 146px;
    margin: 0;
    padding: 18px;
    text-align: left;
    border-radius: 5px;
    display: none;
    overflow: hidden;
`

function Apropos() {
    return (
        <main>
            <header>
            <BannerApropos />
            </header>
            <section>
            <CitationWrapper>
                <BoutonAcc>Fiabilité</BoutonAcc>
                <MentionsTexte>{txtfiabilite}</MentionsTexte>
                <BoutonAcc>Respect</BoutonAcc>
                <MentionsTexte>{txtrespect}</MentionsTexte>
                <BoutonAcc>Service</BoutonAcc>
                <MentionsTexte>{txtservice}</MentionsTexte>
                <BoutonAcc>Responsabilité</BoutonAcc>
                <MentionsTexte>{txtresponsabilite}</MentionsTexte>
            </CitationWrapper>
            </section>
        </main>
    )
}

export default Apropos