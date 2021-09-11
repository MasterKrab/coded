import FontFaceObserver from 'fontfaceobserver'

const addFont = (name, details) => {
  const link = document.createElement('link')
  link.href = `https://fonts.googleapis.com/css2?family=${details}&display=swap`
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const Font = new FontFaceObserver(name)

  Font.load(null, 5000).then(() =>
    document.documentElement.classList.add(name.replaceAll(' ', '-'))
  )
}

export default addFont
