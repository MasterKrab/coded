import pug from 'pug'

export default (req, res) => {
  const { code, compressed } = req.body

  try {
    const result = pug.render(code, { pretty: !compressed })

    res.json({ type: 'success', code: result })
  } catch (error) {
    const code = error.message

    res.json({ type: 'error', code })
  }
}
