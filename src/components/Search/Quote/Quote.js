import React from 'react'
import Card from 'react-bootstrap/Card'
import { QuoteCard } from './Quote.styles'

const Quote = (props) => {
  const { quote, scribe, title } = props.singleQuote
  return (
    <QuoteCard className="border-dark">
      <Card.Header className="border-dark">Words of Wisdom</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>"{quote}"</p>
          <footer className="blockquote-footer">
            {title} <cite title="Source Title">{scribe}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </QuoteCard>
  );
}

export default Quote