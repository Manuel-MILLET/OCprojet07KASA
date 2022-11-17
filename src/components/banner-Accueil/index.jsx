/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 17 novembre 19h00
*/

import HomeIllustration from '../../assets/banner-header-sombre.png'
import citation from "../../datas/aboutExpressions"
import '../../styles/Banner-Accueil.css'

const slogan = citation.slogan

function BannerAccueil() {
    return (
        <div className='BannerHomeWrapper'>
            <img className='IllustrationBannerAccueil' src={HomeIllustration} alt='paysage bord de mer' />
            <h1 className='HomeSlogan'>{slogan}</h1>
        </div>
    )
}

export default BannerAccueil