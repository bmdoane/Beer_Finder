import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
import { auth } from '../Firebase'
import { AuthContext } from '../containers/Auth/Auth'

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

const Login = ({ history }) => {
  const handleLogin = useCallback(async event => {
    event.preventDefault()
    const { email, password } = event.target.elements
    try {
      await auth.signInWithEmailAndPassword(email.value, password.value)
      history.push("/user")
    } catch (error) {
      alert(error)
    }
  }, [history])

  const { currentUser } = useContext(AuthContext)
  if (currentUser) {
    return <Redirect to="/user" />
  }


  return (
    <Container>
      <Headline>Login</Headline>
      <LoginForm onSubmit={handleLogin}>
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
        <Button
          variant="primary"
          type="submit"
        >
          Log In
        </Button>
      </LoginForm>
    </Container>
  )
}

export default withRouter(Login)