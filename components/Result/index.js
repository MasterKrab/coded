import Link from 'next/Link'
import { ResultItem, StyledLink, Title, Description } from './styles'
import JsxParser from 'react-jsx-parser'

const Result = ({ slug, title, description }) => {
  // const sourceTitle = serialize(title)
  // const sourceDescription = serialize(description)
  // console.log(sourceTitle)
  // console.log(sourceDescription)

  return (
    <ResultItem>
      <Link href={`/${slug}`} passHref>
        <StyledLink>
          <Title>
            {/* {title} */}
            {/* <MDXRemote {...sourceTitle} /> */}
            <JsxParser jsx={title} />
          </Title>
          <Description>
            {/* {description} */}
            {/* <MDXRemote {...sourceDescription} /> */}
            <JsxParser jsx={description} />
          </Description>
        </StyledLink>
      </Link>
    </ResultItem>
  )
}

export default Result
