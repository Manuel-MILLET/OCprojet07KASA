/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 16 novembre 12h00

*/
import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../../datas/datasLogements.json'
import Carousel from '../../components/Carousel'
import '../../styles/FicheLogement.css'

function HomeTest() {
  const { productId } = useParams();
  const productID = products.find((product) => product.id === productId);
  const titre = 'ici le nom de l appart !!';


  return (
    <main>
    <Carousel />
    <section>
      <p>salut manu !!</p>
      <p>{titre}</p>
      <p>{productID}</p>

    </section>

    </main>
)
}

export default HomeTest


/*
  const { cover, title, location, rating, host, equipments, description, pictures } =
    product;


          <div className="singleproduct__tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>


      <div className="singleproduct__rating-and-host">
          <Rating rating={rating} />
          <Host host={host} />
      </div>


    <section>
      <div className="singleproduct__dropdowns">
        <Collapse title="description" content={description} />
        <Collapse title="équipement" content={equipments} />
      </div>
    </section>

*/