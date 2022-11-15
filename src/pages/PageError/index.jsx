/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 19h00

PAGE ERROR 404 page non trouvée
*/
import styled from 'styled-components'
import { StyledLink } from '../../styles/Atoms'
import colors from '../../styles/colors'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  align-items: center;
  color: ${colors.redprimary};
  max-width: 1440px;
  max-height: 1024px;
  margin: 0;
  padding: 0;
`

const NumError = styled.p`
  color: ${colors.redprimary};
  background-color: ${colors.white};
  font-family: Montserrat, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 288px;
  height: 220px;
  font-weight: 700;
  line-height: 230px;
`

const ErrorTitle = styled.h1`
  margin: 50px;
  color: ${colors.redprimary};
  font-weight: 400;
`

function PageError() {
  return (
    <section>
    <ErrorWrapper>
      <NumError>404</NumError>
      <ErrorTitle>Oups !... La page que vous demandez n'existe pas.</ErrorTitle>
      <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
    </ErrorWrapper>
    </section>
  )
}

export default PageError