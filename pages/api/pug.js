import pug from 'pug'

export default (req, res) => {
  const { code, compressed } = req.body

  try {
    const pretty = !compressed

    const result = pug.render(code, { pretty })

    res.json({ type: 'success', code: result.slice(result.indexOf('\n') + 1) })
  } catch (error) {
    const code = error.message

    res.json({ type: 'error', code })
  }
}
