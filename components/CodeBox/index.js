import Highlight, { defaultProps } from 'prism-react-renderer'
import palenight from 'prism-react-renderer/themes/palenight'
import { Pre, LineIndex } from './styles'

const CodeBox = ({ children, className = '' }) => {
  const language = className.replace(/language-/, '')

  return (
    <Highlight
      {...defaultProps}
      theme={palenight}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={{ ...style }}>
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
  )
}

export default CodeBox
