import Link from 'next/Link'
import { ResultItem, StyledLink, Title, Description } from './styles'

const Result = ({ slug, title, description }) => (
  <ResultItem>
    <Link href={`/${slug}`} passHref>
      <StyledLink>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </StyledLink>
    </Link>
  </ResultItem>
)

export default Result
