import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 280px;
  padding: 20px 0;
  text-align: center;
`

function Alert({ alert }) {
  const { addStatus, badStatus } = alert
  let alertMsg = null
  if (addStatus) {
    alertMsg = 'Please add at least one search term to fields above.'
  }
  if (badStatus) {
    alertMsg = 'No records were found for this search. Please check spelling and refine search terms.'
  }

  return (
    <Container>
      {alertMsg}
    </Container>
  )
}

export default Alert