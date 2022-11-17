/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 17 novembre 19h00

PAGE A PROPOS
*/
import React from 'react'
import BannerApropos from '../../components/banner-Apropos'
import citation from '../../datas/aboutExpressions'
import '../../styles/Apropos.css'

const txtfiabilite = citation.fiabilite
const txtrespect = citation.respect
const txtservice = citation.service
const txtresponsabilite = citation.responsabilite

function Apropos() {
    return (
        <main>
            <BannerApropos />
            <section className='CitationWrapper'>
                <button className='BoutonAcc'>Fiabilité</button>
                <p className='MentionsTexte'>{txtfiabilite}</p>
                <button className='BoutonAcc'>Respect</button>
                <p className='MentionsTexte'>{txtrespect}</p>
                <button className='BoutonAcc'>Service</button>
                <p className='MentionsTexte'>{txtservice}</p>
                <button className='BoutonAcc'>Responsabilité</button>
                <p className='MentionsTexte'>{txtresponsabilite}</p>
            </section>
        </main>
    )
}

export default Apropos