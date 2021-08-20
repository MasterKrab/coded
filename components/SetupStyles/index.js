import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeContext from 'context/theme'
import THEME_STATES from 'context/theme/states'
import colors from 'styles/theme/colors'

const SetupStyles = ({ children }) => {
  const { theme, themeDevice } = useContext(ThemeContext)

  return (
    <ThemeProvider
      theme={
        theme === THEME_STATES.DEVICE
          ? colors[themeDevice]
          : colors[theme] || colors[THEME_STATES.LIGHT]
      }
    >
      {children}
    </ThemeProvider>
  )
}

export default SetupStyles
