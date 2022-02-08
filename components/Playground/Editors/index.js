import { useContext } from 'react'
import dynamic from 'next/dynamic'
import ThemeContext from 'context/theme'
import { GlobalStyles, Container, EditorContainer } from './styles'

const Editor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
})

const Editors = ({
  showResult,
  language,
  handleChange,
  code,
  result,
  languageResult,
}) => {
  const { themeDevice } = useContext(ThemeContext)

  const THEME_STATES = {
    dark: 'vs-dark',
    light: 'light',
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <EditorContainer show={true}>
          <Editor
            width=""
            height=""
            language={language}
            theme={THEME_STATES[themeDevice]}
            value={code}
            onChange={handleChange}
            options={{ scrollbar: true, minimap: { enabled: false } }}
            wrapperClassName="editor-wrapper"
            automaticLayout={true}
            fontFamily="Fira Code"
          />
        </EditorContainer>
        <EditorContainer show={showResult}>
          <Editor
            width=""
            height=""
            language={languageResult}
            theme={THEME_STATES[themeDevice]}
            value={result}
            options={{ readOnly: true, minimap: { enabled: false } }}
            wrapperClassName="editor-wrapper"
            automaticLayout={true}
            fontFamily="Fira Code"
          />
        </EditorContainer>
      </Container>
    </>
  )
}
export default Editors
