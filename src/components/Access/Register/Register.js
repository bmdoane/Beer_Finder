import React, { useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import db, { auth } from '../../../Firebase'
import { Container, Headline } from './Register.styles'
import AccessForm from '../AccessForm/AccessForm'

const Register = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault()
      const { email, password, userName } = event.target.elements
      try {
        await auth
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(cred => {
            return db
              .collection("users")
              .doc(cred.user.uid)
              .set({
                userName: userName.value,
                memberSince: new Date().toString(),
                userBreweries:[]
              })
          })
        history.push("/")
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )
  return (
    <Container>
      <Headline>Register</Headline>
      <AccessForm
        handleSignUp={handleSignUp}
        isLoggingIn={false} />
    </Container>
  )
}

export default withRouter(Register)
