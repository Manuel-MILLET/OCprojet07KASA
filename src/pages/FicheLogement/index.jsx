/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 24 novembre 19h00
*/
//PAGE FICHE LOGEMENT

import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../../datas/datasLogements.json'
import Carousel from '../../components/Carousel'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import '../../styles/FicheLogement.css'

function FicheLogement () {
    const { productId } = useParams();
    const product = products.find((product) => product.id === productId);
    const {  title, pictures, description, host, rating, location, equipments } = product;

    return (
        <main>
            <section>
            <Carousel slides={ pictures } />
                <div className='block-primary'>
                    <div className='block-info'>{/*  block information */}
                        <h1 className='titreAppartement'>{ title }</h1>
                        <p className='location'>{ location }</p>
                        <div className='tags-info'>
                            { product.tags.map((tag, index) => (
                            <Tags key={ index } getTag={ tag }/>
                            ))}
                        </div>
                    </div>
                    <div className='block-host'>{/* host et racing*/}
                        <Host host={ host }/>
                        <Rating rating={ rating }/>
                    </div>
                </div>
                <div className='block-secondary'>{/* block dropdows description et &quipements  */}
                    <div className='block-description-equipement'>           
                        <Collapse title='Description' textArray={ [ description ] } />
                    </div> 
                    <div className='block-description-equipement'>
                        <Collapse title='Équipements' textArray={ equipments } />
                    </div> 
                </div>
            </section>
        </main>
    )
}
  
export default FicheLogement