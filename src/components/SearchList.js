import React from 'react'
import States from "datasets-us-states-abbr-names";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BreweryListContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 20px 0;
`

const BreweryList = styled.ul`
  margin: 0 auto;
  padding: 0 20px;

  & li {
    list-style-type: none;
    padding: 3px 0;
  }
`

const BreweryLink = styled(Link)`
  color: #000;
  font-weight: bold;

  ::before {
    content: '🍺 ';
  }

  &:hover {
    color: red;
    text-decoration: none;
  }
`

const abbrState = brewState => {
  return Object.keys(States).find(key => States[key] === brewState)
}

const SearchList = ({ breweries }) => {
  return (
    <BreweryListContainer>
      <BreweryList>
        {breweries.map(brewery => {
          const { name, city, state, id } = brewery
          return (
            <li key={id}>
              <BreweryLink
                to={{
                  pathname: "/brewery",
                  state: {
                    brewery: brewery,
                  }
                }}
              >
                {name} - {city}, {abbrState(state)}
              </BreweryLink>
            </li>
          );
        })}
      </BreweryList>
    </BreweryListContainer>
  )
}

export default SearchList