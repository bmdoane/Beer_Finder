import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const BreweryListContainer = styled.div`
  padding: 20px 0;
  max-width: 450px;
`

const SearchHelp = styled.h5`
  text-align: center;
`

const BreweryList = styled.ul`
  padding: 0 20px;
  margin: 0 auto;

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

function SearchList({ breweries, searchMade }) {
  // Need to reset inputs and button when showing SearchHelp
  return (
    <BreweryListContainer>
      {breweries.length === 0 && searchMade === true ? (
        <SearchHelp>
          No records were found for this search. Please check spelling and
          refine search terms.
        </SearchHelp>
      ) : (
        <BreweryList>
          {breweries.map(brew => {
            const { name, city, state, id } = brew;
            return (
              <li key={id}>
                <BreweryLink
                  to={{
                    pathname: "/brewery",
                    state: {
                      brewery: brew
                    }
                  }}
                >
                  {`${name}, ${city}, ${state}`}
                </BreweryLink>
              </li>
            );
          })}
        </BreweryList>
      )}
    </BreweryListContainer>
  )
}

export default SearchList