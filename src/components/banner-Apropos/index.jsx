/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00
*/

import AproposIllustration from '../../assets/apropos.png'
import '../../styles/Banner-Apropos.css'

function BannerApropos() {
    return (
        <section className='BannerAproposWrapper'>
            <img className='IllustrationBannerApropos' src={AproposIllustration} alt='paysage de montagne' />
        </section>
    )
}

export default BannerApropos