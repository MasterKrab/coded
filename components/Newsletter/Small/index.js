import { StyledSmall, Link } from './styles'

const Small = () => (
  <StyledSmall>
    Subscribiéndote, estás de acuerdo con los{' '}
    <Link
      target="_blank"
      rel="noreferrer noopener"
      href="https://www.getrevue.co/terms"
    >
      Términos de uso{' '}
    </Link>
    de Revue y su{' '}
    <Link
      target="_blank"
      rel="noreferrer noopener"
      href="https://www.getrevue.co/privacy"
    >
      Política de Privacidad.
    </Link>
  </StyledSmall>
)

export default Small
