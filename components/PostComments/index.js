import Head from 'next/head'
import { useContext, useEffect } from 'react'
import ThemeContext from 'context/theme'
import THEME_STATES from 'context/theme/states'
import Link from './Link'
import { Container } from './styles'

const PostComments = ({ title }) => {
  const { themeDevice } = useContext(ThemeContext)

  const getTheme = () =>
    themeDevice === THEME_STATES.LIGHT ? 'light' : 'transparent_dark'

  useEffect(() => {
    const iframe = document.querySelector('.giscus-frame')

    if (iframe) {
      iframe.contentWindow.postMessage(
        {
          giscus: {
            setConfig: {
              theme: getTheme(),
            },
          },
        },
        'https://giscus.app'
      )
      return
    }

    const script = document.createElement('script')

    script.src = 'https://giscus.app/client.js'
    script.id = 'comments-script'
    script.setAttribute('data-repo', 'MasterKrab/coded')
    script.setAttribute('data-category', 'Comments')
    script.setAttribute('data-category-id', 'DIC_kwDOF7TXS84B-5Hs')
    script.setAttribute('data-mapping', 'specific')
    script.setAttribute('data-term', title)
    script.setAttribute('data-theme', getTheme())
    script.setAttribute('crossOrigin', 'anonymous')
    script.async = true

    document.body.appendChild(script)

    return () => document.getElementById('comments-script')?.remove()
  }, [themeDevice])

  return (
    <>
      <Head>
        <Link theme="light" />
        <Link theme="transparent_dark" />
      </Head>
      <Container>
        <div className="giscus" />
      </Container>
    </>
  )
}

export default PostComments
