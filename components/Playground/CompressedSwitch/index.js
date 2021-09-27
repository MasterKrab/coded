import { Button } from '../playground.styles'

const CompressedSwitch = ({ handleToggle, isCompressed }) => (
  <Button
    onClick={handleToggle}
    aria-label="Comprimido"
    aria-checked={isCompressed}
    role="switch"
  >
    {isCompressed ? 'Comprimido' : 'Expandido'}
  </Button>
)

export default CompressedSwitch
