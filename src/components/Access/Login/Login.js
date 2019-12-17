import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Container, Headline } from './Login.styles'
import { auth } from '../../../Firebase'
import { AuthContext } from '../../../context/Auth'
import AccessForm from '../AccessForm/AccessForm'

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
      <AccessForm
        handleLogin={handleLogin}
        isLoggingIn={true} />
    </Container>
  )
}

export default withRouter(Login)