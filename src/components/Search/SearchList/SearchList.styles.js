import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BreweryListContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 20px 0;
`;

export const BreweryList = styled.ul`
  margin: 0 auto;
  padding: 0 20px;

  & li {
    list-style-type: none;
    padding: 3px 0;
  }
`;

export const BreweryLink = styled(Link)`
  color: #000;
  font-weight: bold;

  ::before {
    content: "🍺 ";
  }

  &:hover {
    color: red;
    text-decoration: none;
  }
`;
