import { useState } from 'react'
import { Container, Input, Label } from './styles'

const Field = () => {
  const [email, setEmail] = useState('')

  const handleChange = (e) => setEmail(e.target.value)

  return (
    <Container>
      <Input
        onChange={handleChange}
        text={email}
        type="email"
        name="member[email]"
        id="member[email]"
        required
      />
      <Label htmlFor="member[email]">Correo electrónico</Label>
    </Container>
  )
}

export default Field
