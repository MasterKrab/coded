import { useContext } from 'react'
import ThemeContext from 'context/theme'
import { Input, IconContainer } from './styles'
import VisuallyHiddenSpan from 'utils/VisuallyHiddenSpan'

const Selector = ({ theme, Icon }) => {
  const { theme: selectedTheme, changeTheme } = useContext(ThemeContext)

  const handleChange = (e) => changeTheme(e.target.value)

  const THEME_LABELS = {
    light: "Claro",
    device: "Dispositivo",
    dark: "Oscuro"
  }

  return (
    <label>
      <Input
        onChange={handleChange}
        type="radio"
        name="theme"
        value={theme}
        defaultChecked={selectedTheme === theme}
      />
      <VisuallyHiddenSpan>{THEME_LABELS[theme]}</VisuallyHiddenSpan>
      <IconContainer>
        <Icon aria-hidden="true" width={27.5} height={27.5} />
      </IconContainer>
    </label>
  )
}

export default Selector
