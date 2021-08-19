import Link from 'next/link'
import { ResultItem, StyledLink, Title, Description } from './styles'
import JsxParser from 'react-jsx-parser'

const Result = ({ slug, title, description }) => (
  <ResultItem>
    <Link href={`/${slug}`} passHref>
      <StyledLink>
        <Title>
          <JsxParser jsx={title} />
        </Title>
        <Description>
          <JsxParser jsx={description} />
        </Description>
      </StyledLink>
    </Link>
  </ResultItem>
)

export default Result
