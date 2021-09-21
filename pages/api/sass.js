import { nanoid as id } from 'nanoid'
import fs from 'fs'
import sass from 'sass'

export default (req, res) => {
  const { code, extension = 'scss', compressed = false } = req.body

  if (extension !== 'scss' && extension !== 'sass')
    res.status(400).end('Invalid extension')

  const fileName = `${id()}.${extension}`

  fs.writeFileSync(`./${fileName}`, code)

  try {
    const result = sass.renderSync({
      file: fileName,
      outputStyle: compressed ? 'compressed' : 'expanded',
    })

    res.json({ type: 'success', code: result.css.toString() })
  } catch (error) {
    const { column, formatted, line } = error
    const code = formatted.slice(0, formatted.lastIndexOf('\n'))

    res.json({ type: 'error', column, code, line })
  } finally {
    fs.unlinkSync(fileName)
  }
}
