import React from 'react'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

const QuoteCard = styled(Card)`
  margin: 0 40px;
`

const Quotes = () => {
  return (
    <QuoteCard className="border-dark">
      <Card.Header className="border-dark">Words of Wisdom</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>"Work is the curse of the drinking classes."</p>
          <footer className="blockquote-footer">
            Irish poet <cite title="Source Title">Oscar Wilde</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </QuoteCard>
  );
}

export default Quotes