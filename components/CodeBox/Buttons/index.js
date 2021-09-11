import { useState } from 'react'
import { Container, Button, CopyButton } from './styles'
import CopyIcon from '@icons/CopyIcon'
import FullScreenIcon from '@icons/FullScreenIcon'
import copyToClipboard from 'utils/copyToClipboard'

const Buttons = ({ text, isHover, isFullScreen, toggleFullScreen }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    copyToClipboard(text).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 1500)
    })
  }

  return (
    <Container isFullScreen={isFullScreen}>
      <Button
        isFullScreen={isFullScreen}
        isHover={isHover}
        onClick={toggleFullScreen}
        aria-label={`${isFullScreen ? 'Quitar' : 'Poner en'} pantalla completa`}
      >
        <FullScreenIcon width={20} height={20} />
      </Button>
      <CopyButton
        isFullScreen={isFullScreen}
        isHover={isHover}
        isCopied={isCopied}
        onClick={handleCopy}
        aria-label="Copiar al portapapeles"
      >
        <CopyIcon width={20} height={20} />
      </CopyButton>
    </Container>
  )
}

export default Buttons
