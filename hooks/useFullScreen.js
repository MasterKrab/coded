import { useState, useEffect } from 'react'

const useFullScreen = (element) => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    const handleFullScreenChange = () =>
      setIsFullScreen(!!document.fullscreenElement)

    document.addEventListener('fullscreenchange', handleFullScreenChange)

    return () =>
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
  }, [])

  const toggleFullScreen = () => {
    if (document.fullscreenElement) return document.exitFullscreen()

    element?.current.requestFullscreen()
  }

  return [isFullScreen, toggleFullScreen]
}

export default useFullScreen
