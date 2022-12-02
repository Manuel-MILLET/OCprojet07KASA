/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 10 décembre 19h00
    PAGE ERROR 404, page non trouvée
*/
import { Link } from 'react-router-dom'
import '../../styles/PageError.css'

function PageError() {
  return (
    <main>
      <section className='ErrorWrapper'>
          <h6>404</h6>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
          <Link className='RetourHome' to="/">Retourner sur la page d'accueil</Link>
      </section>
    </main>
  )
}

export default PageError