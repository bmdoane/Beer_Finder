import React from 'react'
import States from "datasets-us-states-abbr-names";
import { BreweryListContainer, BreweryList, BreweryLink } from './SearchList.styles'

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