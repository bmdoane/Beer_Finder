import React from 'react'
import { Container, Message } from './Alert.styles'

const Alert = ({ alert }) => {
  const { addStatus, badStatus } = alert
  let alertMsg = null
  if (addStatus) {
    alertMsg = (
      <Message>'Please add at least one search term to fields above.'</Message>
    );
  }
  if (badStatus) {
    alertMsg = (
      <Message>
        'No records were found for this search. Please check spelling and refine
        search terms.'
      </Message>
    );
  }

  return (
    <Container>
      {alertMsg}
    </Container>
  )
}

export default Alert