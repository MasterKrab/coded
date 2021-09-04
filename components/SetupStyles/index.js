import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeContext from 'context/theme'
import THEME_STATES from 'context/theme/states'
import colors from 'styles/theme/colors'

const SetupStyles = ({ children }) => {
  const { themeDevice, loadedTheme } = useContext(ThemeContext)

  return (
    loadedTheme && (
      <ThemeProvider theme={colors[themeDevice] || colors[THEME_STATES.LIGHT]}>
        {children}
      </ThemeProvider>
    )
  )
}

export default SetupStyles
