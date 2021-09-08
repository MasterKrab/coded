import { useContext } from 'react'
import ThemeContext from 'context/theme'
import { Input, IconContainer } from './styles'

const Selector = ({ theme, Icon }) => {
  const { theme: selectedTheme, changeTheme } = useContext(ThemeContext)

  const handleChange = (e) => changeTheme(e.target.value)

  return (
    <label>
      <Input
        onChange={handleChange}
        type="radio"
        name="theme"
        value={theme}
        defaultChecked={selectedTheme === theme}
      />
      <IconContainer aria-label={theme}>
        <Icon aria-hidden="true" width={27.5} height={27.5} />
      </IconContainer>
    </label>
  )
}

export default Selector
