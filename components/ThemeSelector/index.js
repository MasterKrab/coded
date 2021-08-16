import { useContext } from 'react'
import ThemeContext from 'context/theme'
import { Fieldset, Legend } from './styles'
import Selector from './Selector'
import SunIcon from '@icons/SunIcon'
import MoonIcon from '@icons/MoonIcon'
import DeviceIcon from '@icons/DeviceIcon'

const ThemeSelector = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Fieldset selectedTheme={theme}>
      <Legend>Theme</Legend>
      <Selector theme={'light'} Icon={SunIcon} />
      <Selector theme={'device'} Icon={DeviceIcon} />
      <Selector theme={'dark'} Icon={MoonIcon} />
    </Fieldset>
  )
}

export default ThemeSelector
