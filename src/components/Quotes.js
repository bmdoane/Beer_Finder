import React from 'react'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

const QuoteCard = styled(Card)`
  margin: 0 40px 40px;
  @media (max-width: 450px) {
    margin: 0 20px 40px;
  }
`;

const Quotes = (props) => {
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

export default Quotes