import { useContext } from 'react'
import ThemeContext from 'context/theme'
import THEME_STATES from 'context/theme/states'
import { Container } from './styles'
import { Giscus } from '@giscus/react'

const PostComments = ({ title }) => {
  const { themeDevice } = useContext(ThemeContext)

  return (
    <Container aria-label="Comments">
      <Giscus
        repo="MasterKrab/coded"
        repoId="MDEwOlJlcG9zaXRvcnkzOTc3Mjc1NjM"
        category="Comments"
        categoryId="DIC_kwDOF7TXS84B-5Hs"
        mapping="specific"
        term={title}
        reactionsEnabled="1"
        emitMetadata="1"
        theme={
          themeDevice === THEME_STATES.LIGHT ? 'light' : 'transparent_dark'
        }
      />
    </Container>
  )
}

export default PostComments
