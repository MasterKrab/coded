import { useContext } from 'react'
import ThemeContext from 'context/theme'
import { Container, EditorContainer } from './styles'
import Editor from '@monaco-editor/react'

const Editors = ({ showResult, language, handleChange, code, result }) => {
  const { theme } = useContext(ThemeContext)

  const THEME_STATES = {
    dark: 'vs-dark',
    light: 'light',
  }

  return (
    <Container>
      <EditorContainer show={true}>
        <Editor
          width=""
          height=""
          language={language}
          theme={THEME_STATES[theme]}
          value={code}
          onChange={handleChange}
          wrapperClassName="editor-wrapper"
          automaticLayout={true}
          fontFamily="Fira Code"
        />
      </EditorContainer>
      <EditorContainer show={showResult}>
        <Editor
          width=""
          height=""
          language={language}
          theme={THEME_STATES[theme]}
          value={result}
          wrapperClassName="editor-wrapper"
          options={{ readOnly: true }}
          automaticLayout={true}
          fontFamily="Fira Code"
        />
      </EditorContainer>
    </Container>
  )
}
export default Editors
