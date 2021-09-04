import { useState, useEffect } from 'react'
import ThemeContext from './index'
import THEME_STATES from './states'
import checkMediaQueriesSupport from 'utils/checkMediaQueriesSupport'

const UserThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME_STATES.NONE)
  const [themeDevice, setThemeDevice] = useState(THEME_STATES.LIGHT)
  const [loadedTheme, setLoadedTheme] = useState(false)

  const getThemeDevice = () => {
    if (!checkMediaQueriesSupport) return THEME_STATES.LIGHT

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEME_STATES.DARK
      : THEME_STATES.LIGHT
  }

  const changeTheme = (newTheme) => setTheme(newTheme)

  useEffect(() => {
    if (theme === THEME_STATES.NONE) {
      const savedTheme = localStorage.getItem('theme') || THEME_STATES.LIGHT
      setTheme(savedTheme)
      setLoadedTheme(true)
    } else {
      localStorage.setItem('theme', theme)
    }

    if (theme === THEME_STATES.DEVICE) {
      const themeDevice = getThemeDevice()
      setThemeDevice(themeDevice)
    } else {
      setThemeDevice(theme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{ theme, changeTheme, themeDevice, loadedTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default UserThemeProvider
