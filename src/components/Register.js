import React, { useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
import { auth } from '../Firebase'

const Container = styled.div`
  width: 280px;
  margin: 0 auto;
`

const LoginForm = styled(Form)`
  button:first-of-type {
    margin-right: 10px;
  }
`

const Headline = styled.h3`
  text-align: center;
  padding: 5px 0;
  margin-bottom: 5px;
`

const FormLabel = styled(Form.Label)`
  :not(:first-child) {
    padding-top: 5px;
  }
`

const Register = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await auth.createUserWithEmailAndPassword(email.value, password.value)
        history.push("/")
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )
  return (
    <Container>
      <Headline>Login</Headline>
      <LoginForm onSubmit={handleSignUp}>
        <Form.Group>
          <FormLabel>Email</FormLabel>
          <Form.Control
            autoFocus
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
          />
          <FormLabel>Password</FormLabel>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
      </LoginForm>
    </Container>
  )
}

export default withRouter(Register)
