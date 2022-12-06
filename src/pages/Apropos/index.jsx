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
import '../../styles/Apropos/banner.css'


function Apropos() {
    const data = ABOUT_EXPRESSIONS
    const slogan = ''
    const textAlt = 'Paysage de montagnes eneigées'

    return (
        <main>
            <div className='apropos-banner-wrapper'>
                <Banner bannerImage={ AproposIllustration } 
                    slogan={ slogan } 
                    textAlt={ textAlt } />
            </div>
            {data.map(({ title, text }) => (
                <Collapse key={`about-${title}`} title={title} textArray={[text]} />
            ))}
        </main>
    )
}
   
export default Apropos


/*
import styled from 'styled-components'

            <AProposBannerWrapper>

            </AProposBannerWrapper>


const AProposBannerWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
width: calc(100% - 200px);
max-width: 1240px;
height: 223px;
margin: 40px auto;
padding: 0;
`


*/