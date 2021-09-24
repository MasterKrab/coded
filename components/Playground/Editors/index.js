import { useContext } from 'react'
import ThemeContext from 'context/theme'
import { Container, EditorContainer } from './styles'
import Editor from '@monaco-editor/react'

const Editors = ({
  showResult,
  language,
  handleChange,
  code,
  result,
  languageResult,
  completeScreen,
}) => {
  const { themeDevice } = useContext(ThemeContext)

  const THEME_STATES = {
    dark: 'vs-dark',
    light: 'light',
  }

  return (
    <Container>
      <EditorContainer show={true} completeScreen={completeScreen}>
        <Editor
          width=""
          height=""
          language={language}
          theme={THEME_STATES[themeDevice]}
          value={code}
          onChange={handleChange}
          wrapperClassName={`editor-wrapper ${
            completeScreen ? 'editor-wrapper--complete-screen' : ''
          }`}
          options={{ scrollbar: completeScreen }}
          automaticLayout={true}
          fontFamily="Fira Code"
        />
      </EditorContainer>
      <EditorContainer show={showResult} completeScreen={completeScreen}>
        <Editor
          width=""
          height=""
          language={languageResult}
          theme={THEME_STATES[themeDevice]}
          value={result}
          wrapperClassName={`editor-wrapper ${
            completeScreen ? 'editor-wrapper--complete-screen' : ''
          }`}
          options={{ readOnly: true }}
          automaticLayout={true}
          fontFamily="Fira Code"
        />
      </EditorContainer>
    </Container>
  )
}
export default Editors
