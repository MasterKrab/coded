import { useState, useEffect } from 'react'
import ThemeContext from './index'
import THEME_STATES from './states'
import checkMediaQueriesSupport from 'utils/checkMediaQueriesSupport'

const UserThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME_STATES.LIGHT)

  const getThemeDevice = () => {
    if (!checkMediaQueriesSupport) return THEME_STATES.LIGHT

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEME_STATES.DARK
      : THEME_STATES.LIGHT
  }

  const changeTheme = (newTheme) => setTheme(newTheme)

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, getThemeDevice }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default UserThemeProvider
