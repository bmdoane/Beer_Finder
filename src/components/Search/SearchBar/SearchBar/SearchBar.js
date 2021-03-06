import React from 'react'
import Form from 'react-bootstrap/Form'
import Alert from '../Alert/Alert'
import { Container, Headline, FormLabel, FormButton } from './SearchBar.styles'

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