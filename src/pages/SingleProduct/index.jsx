/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 11 novembre 19h00

PAGE FICHE LOGEMENT

*/
import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'
import Carousel from '../../components/Carousel'

const Wrapper = styled.div`
    margin: 0 50px 0 50px;
    background-color: ${colors.light};
    text-align: left;
`

function SingleProduct () {
    return (
        <main>
            <Carousel />
            <Wrapper>
                <section>
                    <div>
                        <h1>Pages produit simple</h1>
                    </div>
                </section>
            </Wrapper>
        </main>
    )
}
  
export default SingleProduct