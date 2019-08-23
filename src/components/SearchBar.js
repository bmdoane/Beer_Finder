import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function SearchBar ({ handleTerms, handleSubmit, searchName, searchCity, searchState }) {
  return (
    <div className='container search'>
      <Form>
        <Form.Group>
          <Form.Label>Search by brewery name</Form.Label>
          <Form.Control
            autoFocus
            type='text'
            name='searchName'
            placeholder='Find by name...'
            aria-label='Find by name'
            onChange={(e) => handleTerms(e)}
            value={searchName.search}
          />
          <Form.Label>... by city</Form.Label>
          <Form.Control
            type='text'
            name='searchCity'
            placeholder='Find by city...'
            aria-label='Find by city'
            onChange={(e) => handleTerms(e)}
            value={searchCity.search}
          />
          <Form.Label>... by state</Form.Label>
          <Form.Control
            type='text'
            name='searchState'
            placeholder='Find by state...'
            aria-label='Find by state'
            onChange={(e) => handleTerms(e)}
            value={searchState.search}
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit" onClick={(e) => handleSubmit(e)}>
          Stumble on!
        </Button>
      </Form>
    </div>
  )
}

export default SearchBar
