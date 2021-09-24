import FullScreenIcon from '@icons/FullScreenIcon'
import useFullScreen from 'hooks/useFullScreen'
import ButtonRight from './styles'

const FullScreenButton = ({ element }) => {
  const [isFullScreen, toggleFullScreen] = useFullScreen(element)

  return (
    <ButtonRight
      aria-label={`${isFullScreen ? 'Quitar' : 'Poner en'} pantalla completa`}
      onClick={toggleFullScreen}
    >
      <FullScreenIcon width={20} height={20} aria-hidden="true" />
    </ButtonRight>
  )
}
export default FullScreenButton
