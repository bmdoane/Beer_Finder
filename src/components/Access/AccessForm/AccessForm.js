import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { LoginForm, FormLabel } from './AccessForm.styles'

const AccessForm = props => {
  const { handleLogin, handleSignUp, isLoggingIn } = props

  const formButton = isLoggingIn ?
    <Button
      variant="primary"
      type="submit"
    >
      Log In
    </Button> :
    <Button
      variant="success"
      type="submit"
    >
      Register
    </Button>

  return (
    <>
      <LoginForm onSubmit={isLoggingIn ? handleLogin : handleSignUp}>
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
          {!isLoggingIn &&
          <>
            <FormLabel>Username</FormLabel>
            <Form.Control
              type="text"
              name="userName"
              placeholder="Username"
              aria-label="Username"
            />
          </>}
        </Form.Group>
        {formButton}
      </LoginForm>
    </>
  )
}

export default AccessForm