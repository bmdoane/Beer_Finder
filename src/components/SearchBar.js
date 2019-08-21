import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function SearchBar ({ handleName, handleSubmit, searchName }) {
  return (
    <div className='container search'>
      <Form>
        <Form.Group>
          <Form.Label>Search by brewery name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            placeholder="Find by name..."
            aria-label='Find by name'
            type='text'
            onChange={(e) => handleName(e)}
            value={searchName}
          />
          <Form.Label>... by city</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            placeholder="Find by city..."
            aria-label='Find by city'
            type='text'
          />
          <Form.Label>... by state</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            placeholder="Find by state..."
            aria-label='Find by state'
            type='text'
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