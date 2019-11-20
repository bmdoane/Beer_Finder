import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from '../components/Alert'
import styled from 'styled-components'

const Container = styled.div`
  width: 280px;
  margin: 0 auto;
`

const Headline = styled.h3`
  text-align: center;
  padding: 10px 0;
  margin-bottom: 14px;
`

const FormLabel = styled(Form.Label)`
  :not(:first-child) {
    padding-top: 5px;
  }
`

const FormButton = styled(Button)`
  width: 100%;
`

const SearchBar = ({ handleTerms, handleSubmit, searchName, searchCity, searchState, searchMade, alert }) => {
  return (
    <Container>
      <Headline>Find a watering hole...</Headline>
      <Form>
        <Form.Group>
          <FormLabel>Search brewery by name</FormLabel>
          <Form.Control
            autoFocus
            type="text"
            name="searchName"
            placeholder="Find by name..."
            aria-label="Find by name"
            onChange={e => handleTerms(e)}
            value={searchName.search}
          />
          <FormLabel>... by city</FormLabel>
          <Form.Control
            type="text"
            name="searchCity"
            placeholder="Find by city..."
            aria-label="Find by city"
            onChange={e => handleTerms(e)}
            value={searchCity.search}
          />
          <FormLabel>... by state</FormLabel>
          <Form.Control
            type="text"
            name="searchState"
            placeholder="Find by state..."
            aria-label="Find by state"
            onChange={e => handleTerms(e)}
            value={searchState.search}
          />
        </Form.Group>
        <FormButton
          variant="secondary"
          type="submit"
          onClick={e => handleSubmit(e)}
          disabled={searchMade}
        >
          Stumble on!
        </FormButton>
      </Form>
      <Alert alert={alert} />
    </Container>
  );
}

export default SearchBar