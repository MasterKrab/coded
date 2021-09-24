import StyledTitle from './styles'
import VisuallyHiddenSpan from 'utils/VisuallyHiddenSpan'

const Title = ({ Icon, name }) => (
  <StyledTitle>
    <Icon width={30} height={30} aria-hidden="true" />
    <VisuallyHiddenSpan>{name}</VisuallyHiddenSpan> Playground
  </StyledTitle>
)

export default Title
