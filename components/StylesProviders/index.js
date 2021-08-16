import UserThemeProvider from 'context/theme/UserThemeProvider'
import SetupStyles from 'components/SetupStyles'

const StylesProviders = ({ children }) => (
  <UserThemeProvider>
    <SetupStyles>{children}</SetupStyles>
  </UserThemeProvider>
)

export default StylesProviders
