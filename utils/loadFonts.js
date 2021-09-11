import FontFaceObserver from 'fontfaceobserver'

const Fonts = () => {
  const link = document.createElement('link')
  link.href =
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const Poppins = new FontFaceObserver('Poppins')

  Poppins.load(null, 5000).then(() => {
    document.documentElement.classList.add('Poppins')
  })
}

export default Fonts
