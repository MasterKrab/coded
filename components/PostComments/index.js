import { useContext, useEffect, useRef } from 'react'
import ThemeContext from 'context/theme'
import THEME_STATES from 'context/theme/states'
import { Container } from './styles'

const PostComments = () => {
  const { themeDevice } = useContext(ThemeContext)
  const container = useRef()

  useEffect(() => {
    const scriptElement = document.createElement('script')
    scriptElement.async = true
    scriptElement.src = 'https://giscus.app/client.js'
    scriptElement.setAttribute('data-repo', 'MasterKrab/coded')
    scriptElement.setAttribute(
      'data-repo-id',
      'MDEwOlJlcG9zaXRvcnkzOTc3Mjc1NjM'
    )
    scriptElement.setAttribute('data-category', 'Comments')
    scriptElement.setAttribute('data-category-id', 'DIC_kwDOF7TXS84B-5Hs')
    scriptElement.setAttribute('data-mapping', 'og:title')
    scriptElement.setAttribute('data-reactions-enabled', '1')
    scriptElement.setAttribute('data-emit-metadata', '0')
    scriptElement.setAttribute('crossorigin', 'anonymous')

    scriptElement.setAttribute(
      'data-theme',
      themeDevice === THEME_STATES.DARK ? 'dark_dimmed' : 'light'
    )

    const ContainerComments = container.current.firstElementChild

    ContainerComments.textContent = ''
    ContainerComments.appendChild(scriptElement)
  }, [container.current, themeDevice])

  return (
    <Container aria-label="Comments" ref={container}>
      <div />
    </Container>
  )
}

export default PostComments
