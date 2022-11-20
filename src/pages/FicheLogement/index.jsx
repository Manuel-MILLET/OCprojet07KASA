/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 19 novembre 19h00
*/
//PAGE FICHE LOGEMENT

import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import products from '../../datas/datasLogements.json'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'
import '../../styles/FicheLogement.css'

function FicheLogement () {
    const { productId } = useParams();
    const product = products.find((product) => product.id === productId);
    const { cover, title, location, rating, host, equipments, description } = product;

    return (
        <main>
            <Carousel image={ cover } />
            <section>
                <div className='block-primary'>
                    <div className='block-info'>{/*  block informationse */}
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
                        {/* <Rating rating={ rating } />*/}
                    </div>
                </div>
                <div className='block-secondary'>{/* block dropdows description et equipements  */}
                    <div className='block-description-equipement'>
                        <p className='titre-secondary'>Description</p>
                        <p className='text-secondary'>{ description }</p>
                    </div>
                    <div className='block-description-equipement'>
                        <p className='titre-secondary'>Equipements</p>
                        <p className='text-secondary'>{ equipments }</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
  
export default FicheLogement
