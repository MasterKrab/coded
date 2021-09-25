const Image = ({ src, alt }) =>
  src.startsWith('http') ? (
    <img src={src} alt={alt} loading="lazy" />
  ) : (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img src={`${src}.png`} alt={alt} loading="lazy" />
    </picture>
  )

export default Image
