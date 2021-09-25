import { useRef, useState, useEffect } from 'react'
import { Container, Top, ButtonMobileOnly, Button } from '../playground.styles'
import PugIcon from '@icons/PugIcon'
import Title from 'components/Playground/Title'
import FullScreenButton from 'components/Playground/FullScreenButton'
import Editors from 'components/Playground/Editors'

const PlaygroundPug = ({ defaultCode = '', completeScreen }) => {
  const element = useRef(null)
  const [code, setCode] = useState(
    completeScreen
      ? localStorage.getItem('pug-code') || defaultCode
      : defaultCode
  )
  const [result, setResult] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [compressed, setCompressed] = useState(
    !!localStorage.getItem('pug-compressed') && completeScreen
  )

  useEffect(() => {
    if (completeScreen) {
      localStorage.setItem('pug-code', code)
      localStorage.getItem('pug-compressed', compressed.toString())
    }

    if (code.trim()) {
      fetch('https://www.coded.tech/api/pug', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ code, compressed }),
      })
        .then((res) => res.json())
        .then(({ code }) => setResult(code))
        .catch((error) => console.error(error))
    }
  }, [code, compressed])

  const handleToggleShowResult = () => setShowResult(!showResult)

  const handleChangeCompressed = () => setCompressed(!compressed)

  return (
    <Container ref={element} completeScreen={completeScreen}>
      <Top completeScreen={completeScreen}>
        {completeScreen && <Title Icon={PugIcon} name="PUG" />}
        <FullScreenButton element={element} />
        <ButtonMobileOnly
          onClick={handleToggleShowResult}
          completeScreen={completeScreen}
        >
          {showResult ? 'Resultado' : 'Código'}
        </ButtonMobileOnly>
        {completeScreen && (
          <Button onClick={handleChangeCompressed}>
            {compressed ? 'Comprimido' : 'Expandido'}
          </Button>
        )}
      </Top>
      <Editors
        language="pug"
        handleChange={setCode}
        code={code}
        result={result}
        languageResult="html"
        showResult={showResult}
        completeScreen={completeScreen}
      />
    </Container>
  )
}

export default PlaygroundPug