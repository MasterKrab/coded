import { Giscus } from '@giscus/react'
import ThemeContext from 'context/theme'
import THEME_STATES from 'context/theme/states'
import { useContext } from 'react'

import { Container } from './styles'

const PostComments = () => {
  const { themeDevice } = useContext(ThemeContext)

  return (
    <Container aria-label="Comments">
      <Giscus
        repo="MasterKrab/coded"
        repoId="MDEwOlJlcG9zaXRvcnkzOTc3Mjc1NjM"
        category="Comments"
        categoryId="DIC_kwDOF7TXS84B-5Hs"
        mapping="og:title"
        reactionsEnabled="1"
        emitMetadata="0"
        theme={themeDevice === THEME_STATES.LIGHT ? 'light' : 'dark_dimmed'}
      />
    </Container>
  )
}

export default PostComments
