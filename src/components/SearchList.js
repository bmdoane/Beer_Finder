import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const BreweryListContainer = styled.div`
  padding: 20px 0;
  max-width: 450px;
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

const SearchList = ({ breweries, searchMade }) => {
  return (
    <BreweryListContainer>
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
    </BreweryListContainer>
  )
}

export default SearchList