import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeContext from 'context/theme'
import colors from 'styles/theme/colors'

const SetupStyles = ({ children }) => {
  const { theme, getThemeDevice } = useContext(ThemeContext)

  return (
    <ThemeProvider
      theme={theme === 'device' ? colors[getThemeDevice()] : colors[theme]}
    >
      {children}
    </ThemeProvider>
  )
}

export default SetupStyles
