import { useState, useEffect } from 'react'
import checkMediaQueriesSupport from 'utils/checkMediaQueriesSupport'
import THEME_STATES from 'utils/THEME_STATES'
import useEventListener from './useEventListener'

const usePrefersColorScheme = (theme, initialTheme) => {
  const [themeDevice, setThemeDevice] = useState(initialTheme)

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

  useEventListener('change', getMatchMedia, getPrefersColorScheme)

  return themeDevice
}

export default usePrefersColorScheme
