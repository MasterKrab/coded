import { useState, useEffect } from 'react'
import ThemeContext from './index'
import THEME_STATES from 'utils/THEME_STATES'
import usePrefersColorScheme from 'hooks/usePrefersColorScheme'

const UserThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME_STATES.NONE)
  const themeDevice = usePrefersColorScheme(theme)
  const [loadedTheme, setLoadedTheme] = useState(false)

  const changeTheme = (newTheme) => setTheme(newTheme)

  useEffect(() => {
    if (theme === THEME_STATES.NONE) {
      const savedTheme = localStorage.getItem('theme') || THEME_STATES.LIGHT
      setTheme(savedTheme)
    } else {
      setLoadedTheme(true)
      localStorage.setItem('theme', theme)
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
