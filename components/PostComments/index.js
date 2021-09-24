import Head from 'next/head'
import { useContext, useEffect } from 'react'
import ThemeContext from 'context/theme'
import THEME_STATES from 'context/theme/states'
import Link from './Link'
import { Container } from './styles'

const PostComments = ({ title }) => {
  const { themeDevice, loadedTheme } = useContext(ThemeContext)

  const getTheme = () =>
    themeDevice === THEME_STATES.LIGHT ? 'light' : 'transparent_dark'

  useEffect(() => {
    if (loadedTheme) {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.as = 'script'
      link.src = 'https://giscus.app/client.js'
      link.id = 'comments-script'
      link.setAttribute('data-repo', 'MasterKrab/coded')
      link.setAttribute('data-category', 'Comments')
      link.setAttribute('data-category-id', 'DIC_kwDOF7TXS84B-5Hs')
      link.setAttribute('data-mapping', 'specific')
      link.setAttribute('data-term', title)
      link.setAttribute('data-theme', getTheme())
      link.setAttribute('crossOrigin', 'anonymous')
      link.async = true

      document.body.appendChild(link)
    }

    return () => document.getElementById('comments-script')?.remove()
  }, [loadedTheme])

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
    }
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
