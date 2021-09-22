import sass from 'sass'

export default (req, res) => {
  const { code, extension = 'scss', compressed = false } = req.body

  if (extension !== 'scss' && extension !== 'sass')
    res.status(400).end('Invalid extension')

  try {
    const result = sass.renderSync({
      data: code,
      outputStyle: compressed ? 'compressed' : 'expanded',
      indentedSyntax: extension === 'sass',
    })

    res.json({ type: 'success', code: result.css.toString() })
  } catch (error) {
    const { column, formatted, line } = error
    const code = formatted.slice(0, formatted.lastIndexOf('\n'))

    res.json({ type: 'error', column, code, line })
  }
}
