import { useContext } from 'react'
import ThemeContext from 'context/theme'
import THEME_STATES from 'context/theme/states'

const PostComments = () => {
  const { themeDevice } = useContext(ThemeContext)

  return (
    <script
      src="https://utteranc.es/client.js"
      repo="MasterKrab/coded"
      issue-term="og:title"
      theme={themeDevice === THEME_STATES.DARK ? 'photon-dark' : 'github-light'}
      crossOrigin="anonymous"
      async
    />
  )
}

export default PostComments
