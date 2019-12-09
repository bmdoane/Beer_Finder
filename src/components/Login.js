import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { auth } from '../Firebase'
import { AuthContext } from '../services/Auth'
import AccessForm from '../components/AccessForm'

const Container = styled.div`
  width: 280px;
  margin: 0 auto;
`

const Headline = styled.h3`
  text-align: center;
  padding: 5px 0;
  margin-bottom: 5px;
`

const Login = ({ history }) => {
  const isLoggingIn = true

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
      <AccessForm
        handleLogin={handleLogin}
        isLoggingIn={isLoggingIn} />
    </Container>
  )
}

export default withRouter(Login)