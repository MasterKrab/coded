import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeContext from 'context/theme'
import THEME_STATES from 'context/theme/states'
import colors from 'styles/theme/colors'

const SetupStyles = ({ children }) => {
  const { themeDevice } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={colors[themeDevice] || colors[THEME_STATES.LIGHT]}>
      {children}
    </ThemeProvider>
  )
}

export default SetupStyles
