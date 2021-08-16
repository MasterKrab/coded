import { Button, ButtonBar } from './styles'

const MenuButton = ({ handleClick, isMenu }) => (
  <Button
    onClick={handleClick}
    aria-label={isMenu ? 'Cerrar menu' : 'Abrir menu'}
  >
    <ButtonBar isMenu={isMenu} aria-hidden="true" />
  </Button>
)

export default MenuButton
