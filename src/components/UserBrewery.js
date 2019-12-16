import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 450px;
  margin: 0 auto 40px;
  & h1 {
    margin: 20px auto;
  }
`
const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
`;

const HomeLink = styled(Link)`
  color: #000;
  &:hover {
    color: #000;
    font-weight: bold;
    text-decoration: none;
  }
`;

const UserBrewery = (props) => {
  const { brewery } = props.location.state;
  console.log('UB', brewery)
  return (
    <Container>
      <h1>{brewery.name}</h1>
      <div>Text area for notes:</div>
      <div>Add a favorite beer:</div>
      <div>Be able to star rate beers</div>
      <div>Wishlist beers text input</div>
      <LinkWrapper>
        <HomeLink to="/">Find another brewery</HomeLink>
      </LinkWrapper>
    </Container>
  );
}

export default UserBrewery