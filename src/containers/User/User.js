import React, { Component, useContext } from 'react'
import styled from 'styled-components'
import db from '../../Firebase'
import States from 'datasets-us-states-abbr-names'

const Container = styled.div`
  max-width: 450px;
  margin: 0 auto;
`

const Headline = styled.h3`
  text-align: center;
  padding: 10px 0;
  margin-bottom: 14px;
`

const BreweryList = styled.ul`
  padding: 0 20px;
  margin: 0 auto;

  & li {
    list-style-type: none;
    padding: 3px 0;
  }
  /* If a link, use one style for Searchlist and User */
  li::before {
    content: "🍺 ";
  }
`

const abbrState = brewState => {
  return Object.keys(States).find(key => States[key] === brewState)
}

class User extends Component {
  state = {
    user: '',
    userBreweries: [],
  }

  componentDidMount() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(
          doc => console.log("docId", doc.id) || doc.data()
        )
        console.log("data", data.breweries)
        this.setState({ userBreweries: data.userBreweries })
      })
  }

  render() {
    const { breweries } = this.state
    return (
      <Container>
        <Headline>My watering holes</Headline>
      
      </Container>
    )
  }
}

export default User
