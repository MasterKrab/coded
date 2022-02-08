import UserThemeProvider from 'context/theme/UserThemeProvider'
import SetupStyles from 'components/SetupStyles'

const StylesProviders = ({ themeDevice, theme, children }) => (
  <UserThemeProvider initialThemeDevice={themeDevice} initialTheme={theme}>
    <SetupStyles>{children}</SetupStyles>
  </UserThemeProvider>
)

export default StylesProviders
