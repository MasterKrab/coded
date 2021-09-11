import { useState } from 'react'

const useFullScreen = (element) => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullScreen(false)
      return
    }

    element.current
      .requestFullscreen()
      .then(() => setIsFullScreen(true))
      .catch(() => setIsFullScreen(false))
  }

  return [isFullScreen, toggleFullScreen]
}

export default useFullScreen
