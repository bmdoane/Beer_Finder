import React from 'react'
import { Container, LinkWrapper, HomeLink } from './UserBreweries.styles'

const UserBreweries = (props) => {
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

export default UserBreweries