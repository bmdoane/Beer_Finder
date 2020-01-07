import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 450px;
  margin: 0 auto;
  & h1 {
    margin: 20px auto;
    text-align: center;
  }
`

export const BeerList = styled.div`
  color: green;
  & ul {
    padding: 0;
  }
  & li {
    list-style-type: none;
    padding: 3px 0;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
`

export const HomeLink = styled(Link)`
  color: #000;
  &:hover {
    color: #000;
    font-weight: bold;
    text-decoration: none;
  }
`