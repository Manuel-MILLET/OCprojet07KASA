/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 30 novembre 19h00
*/

import '../../styles/Banner.css'

function Banner ({ bannerImage, slogan, textAlt}) {
    return (
    <section className='BannerWrapper'>
        <img className='IllustrationBanner' src={ bannerImage } alt={ textAlt} />
        <h1 className='Slogan'> { slogan }</h1>
    </section>
    )
}

export default Banner