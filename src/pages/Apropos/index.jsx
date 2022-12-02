/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 10 décembre 19h00
    PAGE A PROPOS
*/
import React from 'react'
import Banner from '../../components/Banner'
import AproposIllustration from '../../assets/apropos.png'
import Collapse from '../../components/Collapse'
import ABOUT_EXPRESSIONS from '../../datas/Expressions'

function Apropos() {
    const data = ABOUT_EXPRESSIONS
    const slogan = ''
    const textAlt = 'Paysage de montagnes eneigées'

    return (
        <main>
            <Banner bannerImage={ AproposIllustration } 
                slogan={ slogan } 
                textAlt={ textAlt } />

            {data.map(({ title, text }) => (
                <Collapse key={`about-${title}`} title={title} textArray={[text]} />
            ))}
        </main>
    )
}
   
export default Apropos