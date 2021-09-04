const Link = ({ theme }) => (
  <link
    key={theme}
    rel="prefetch"
    href={`https://giscus.app/themes/${theme}.css`}
    as="style"
    type="text/css"
    crossOrigin="anonymous"
  />
)

export default Link
