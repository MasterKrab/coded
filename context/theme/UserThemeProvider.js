import { useState, useEffect } from 'react'
import ThemeContext from './index'
import THEME_STATES from 'utils/THEME_STATES'
import usePrefersColorScheme from 'hooks/usePrefersColorScheme'
import cookie from 'cookie'

const UserThemeProvider = ({
  initialThemeDevice = THEME_STATES.LIGHT,
  initialTheme = THEME_STATES.DEVICE,
  children,
}) => {
  const [theme, setTheme] = useState(initialTheme)
  const themeDevice = usePrefersColorScheme(theme, initialThemeDevice)

  const changeTheme = (newTheme) => setTheme(newTheme)

  useEffect(() => {
    if (!theme || !themeDevice) return

    const cookieOptions = {
      maxAge: 30 * 24 * 60 * 60,
    }

    document.cookie = cookie.serialize('theme', theme, cookieOptions)
    document.cookie = cookie.serialize(
      'themeDevice',
      themeDevice,
      cookieOptions
    )
  }, [theme, themeDevice])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themeDevice }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default UserThemeProvider
