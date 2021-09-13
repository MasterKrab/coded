import { Aside, Form, FormContainer, Container, Button } from './styles'
import Field from './Field'
import Small from './Small'

const Newsletter = () => (
  <Aside>
    <Form
      action="https://www.getrevue.co/profile/coded/add_subscriber"
      method="post"
      name="revue-form"
      target="_blank"
    >
      <FormContainer>
        <h2>¡Subscríbete a la Newsletter!</h2>
        <Container>
          <Field />
          <Button name="member[subscribe]" id="member_submit">
            Suscríbirme
          </Button>
        </Container>
      </FormContainer>
      <Small />
    </Form>
  </Aside>
)

export default Newsletter
