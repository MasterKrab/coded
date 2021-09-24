const Image = ({ src, alt }) =>
  src.startsWith('http') ? (
    <img src={src} alt={alt} />
  ) : (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img src={`${src}.png`} alt={alt} />
    </picture>
  )

export default Image
