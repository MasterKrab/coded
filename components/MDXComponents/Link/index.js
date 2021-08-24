import StyledLink from './styles'

const Link = ({ href, children }) => (
  <StyledLink href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </StyledLink>
)

export default Link
