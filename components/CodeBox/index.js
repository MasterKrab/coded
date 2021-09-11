import { useState, useRef } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import palenight from 'prism-react-renderer/themes/palenight'
import { Container, Pre, LineIndex } from './styles'
import Buttons from './Buttons'
import useFullScreen from 'hooks/useFullScreen'

const CodeBox = ({ children, className = '' }) => {
  const element = useRef(null)
  const [isHover, setIsHover] = useState(false)
  const [isFullScreen, toggleFullScreen] = useFullScreen(element)
  const language = className.replace(/language-/, '')

  const handleToggleHover = () => setIsHover(!isHover)

  return (
    <Container
      onMouseEnter={handleToggleHover}
      onMouseOver={handleToggleHover}
      ref={element}
      isFullScreen={isFullScreen}
    >
      <Buttons
        text={children}
        isHover={isHover}
        element={element}
        isFullScreen={isFullScreen}
        toggleFullScreen={toggleFullScreen}
      />
      <Highlight
        {...defaultProps}
        theme={palenight}
        code={children}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre isFullScreen={isFullScreen} className={className} {...style}>
            {tokens.map(
              (line, i) =>
                i + 1 < tokens.length && (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {language !== 'bash' && <LineIndex>{i + 1}</LineIndex>}

                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
            )}
          </Pre>
        )}
      </Highlight>
    </Container>
  )
}

export default CodeBox
