/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 17 novembre 19h00

PAGE A PROPOS
*/
import React from 'react'
import BannerApropos from '../../components/Banner-Apropos'
import Collapse from '../../components/Collapse'
import '../../styles/Apropos.css'
import ABOUT_EXPRESSIONS from '../../datas/Expressions'

const data = ABOUT_EXPRESSIONS;

function Apropos() {
    return (
        <main className='CitationWrapper'>
            <BannerApropos />
            <div>
                {data.map(({ title, text }) => (
                <Collapse key={`about-${title}`} title={title} textArray={[text]} />
                ))}
            </div>
        </main>
      )
    }
  
export default Apropos