import React from 'react'
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'

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

const Login = (props) => {
  return (
    <>
      <Headline>Login</Headline>
      <LoginForm>
        <Form.Group>
          <FormLabel>Email</FormLabel>
          <Form.Control
            autoFocus
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            onChange={() => console.log("email")}
            value=""
          />
          <FormLabel>Password</FormLabel>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            onChange={() => console.log("password")}
            value=""
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => console.log("Log In")}
        >
          Log In
        </Button>
        <Button
          variant="success"
          type="submit"
          onClick={() => console.log("Noob Register")}
        >
          Noob Register
        </Button>
      </LoginForm>
    </>
  );
}

export default Login