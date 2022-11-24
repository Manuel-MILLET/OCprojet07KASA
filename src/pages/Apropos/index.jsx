/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 24 novembre 19h00
*/
//PAGE A PROPOS

import React from 'react'
import BannerApropos from '../../components/Banner-Apropos'
import Collapse from '../../components/Collapse'

import ABOUT_EXPRESSIONS from '../../datas/Expressions'

const data = ABOUT_EXPRESSIONS;

function Apropos() {
    return (
        <main>
            <BannerApropos />
            {data.map(({ title, text }) => (
            <Collapse key={`about-${title}`} title={title} textArray={[text]} />
            ))}
        </main>
    )
}
  
export default Apropos