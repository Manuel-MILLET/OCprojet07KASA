/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 10 décembre 19h00
*/
import '../../styles/Banner.css'

function Banner ({ bannerImage, slogan, textAlt}) {
    return (
        <div>
            <img className='IllustrationBanner' 
                src={ bannerImage }
                alt={ textAlt } />
            <h1 className='Slogan'> { slogan }</h1>
        </div>
    )
}

export default Banner