import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeContext from 'context/theme'
import THEME_STATES from 'utils/THEME_STATES'
import colors from 'styles/theme/colors'

const SetupStyles = ({ children }) => {
  const { themeDevice, loadedTheme } = useContext(ThemeContext)

  if (process.browser && !loadedTheme) return null

  return (
    <ThemeProvider theme={colors[themeDevice] || colors[THEME_STATES.LIGHT]}>
      {children}
    </ThemeProvider>
  )
}

export default SetupStyles
