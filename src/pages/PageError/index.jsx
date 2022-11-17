/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00

PAGE ERROR 404 page non trouvée
*/

import { StyledLinkRetour } from '../../styles/Atoms'
import '../../styles/PageError.css'

function PageError() {
  return (
    <main>
      <section className='ErrorWrapper'>
          <h6>404</h6>
          <p>Oups !... La page que vous demandez n'existe pas.</p>
          <StyledLinkRetour to="/">Retourner sur la page d'accueil</StyledLinkRetour>
      </section>
    </main>
  )
}

export default PageError