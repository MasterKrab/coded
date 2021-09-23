import { useRef, useState, useEffect } from 'react'
import useFullScreen from 'hooks/useFullScreen'
import {
  Container,
  Top,
  Title,
  Button,
  ButtonMobileOnly,
  ButtonRight,
} from './styles'
import SassIcon from '@icons/SassIcon'
import FullScreenIcon from '@icons/FullScreenIcon'
import VisuallyHiddenSpan from 'utils/VisuallyHiddenSpan'
import Editors from 'components/Playground/Editors'

const PlaygroundSass = ({
  defaultCode = '',
  defaultExtension = 'scss',
  completeScreen,
}) => {
  const element = useRef(null)
  const [isFullScreen, toggleFullScreen] = useFullScreen(element)
  const [code, setCode] = useState(localStorage.getItem('sass-code') || '')
  const [result, setResult] = useState({ code: defaultCode })
  const [showResult, setShowResult] = useState(false)

  const defaultOptions = {
    extension: defaultExtension,
    compressed: false,
  }

  const [options, setOptions] = useState(
    completeScreen
      ? JSON.parse(localStorage.getItem('sass-options')) || defaultOptions
      : defaultOptions
  )

  useEffect(() => {
    localStorage.setItem('sass-code', code)
    localStorage.setItem('sass-options', JSON.stringify(options))

    if (code.trim()) {
      const { extension, compressed } = options

      fetch('https://www.coded.tech/api/sass', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ code, extension, compressed }),
      })
        .then((res) => res.json())
        .then((result) => setResult({ code: result.code }))
        .catch((error) => console.error(error))
    }
  }, [code, options])

  const handleToggleShowResult = () => setShowResult(!showResult)

  const handleChangeLanguage = () =>
    setOptions({
      ...options,
      extension: options.extension === 'scss' ? 'sass' : 'scss',
    })

  const handleChangeOutputStyle = () =>
    setOptions({ ...options, compressed: !options.compressed })

  return (
    <Container ref={element} completeScreen={completeScreen}>
      <Top completeScreen={completeScreen}>
        {completeScreen && (
          <Title>
            <SassIcon width={30} height={30} aria-hidden="true" />
            <VisuallyHiddenSpan>SASS</VisuallyHiddenSpan> Playground
          </Title>
        )}
        <ButtonRight
          aria-label={`${
            isFullScreen ? 'Quitar' : 'Poner en'
          } pantalla completa`}
          onClick={toggleFullScreen}
        >
          <FullScreenIcon width={20} height={20} aria-hidden="true" />
        </ButtonRight>

        <ButtonMobileOnly
          onClick={handleToggleShowResult}
          completeScreen={completeScreen}
        >
          {showResult ? 'Resultado' : 'Código'}
        </ButtonMobileOnly>
        {completeScreen && (
          <>
            <Button onClick={handleChangeLanguage}>
              {options.extension.toUpperCase()}
            </Button>
            <Button onClick={handleChangeOutputStyle}>
              {options.compressed ? 'Comprimido' : 'Expandido'}
            </Button>
          </>
        )}
      </Top>
      <Editors
        language={options.extension}
        handleChange={setCode}
        code={code}
        result={result.code}
        showResult={showResult}
        completeScreen={completeScreen}
      />
    </Container>
  )
}

export default PlaygroundSass
