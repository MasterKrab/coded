import { useState, useEffect } from 'react'
import checkMediaQueriesSupport from 'utils/checkMediaQueriesSupport'
import THEME_STATES from 'utils/THEME_STATES'

const usePrefersColorScheme = (theme) => {
  const [themeDevice, setThemeDevice] = useState(THEME_STATES.LIGHT)

  const getPrefersColorScheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)')

  const getMatchMedia = () => {
    if (!checkMediaQueriesSupport) return setThemeDevice(THEME_STATES.LIGHT)

    setThemeDevice(
      theme === THEME_STATES.DEVICE
        ? getPrefersColorScheme().matches
          ? THEME_STATES.DARK
          : THEME_STATES.LIGHT
        : theme
    )
  }

  useEffect(getMatchMedia, [theme])

  useEffect(() => {
    const matchMedia = getPrefersColorScheme()

    matchMedia.addEventListener('change', getMatchMedia)

    return () => matchMedia.removeEventListener('change', getMatchMedia)
  }, [])

  return themeDevice
}

export default usePrefersColorScheme
