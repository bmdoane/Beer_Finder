import React, { Component } from 'react'
import styled from 'styled-components'
import db from '../../Firebase'
import States from 'datasets-us-states-abbr-names'
import { AuthContext } from '../../services/Auth'
import { getBrewery } from '../../utils/api'
import { FaBeer } from 'react-icons/fa'
import { MdPortrait } from "react-icons/md";

const Container = styled.div`
  max-width: 450px;
  margin: 0 auto;
  border: 1px solid #008000;

`;

const BeerIcon = styled(FaBeer)`
  color: #343A40;
  font-size: 96px;
`;

const PortraitIcon = styled(MdPortrait)`
  color: #343a40;
  font-size: 180px;
`;

const Headline = styled.h3`
  text-align: center;
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

const getUserBreweries = userBreweries => {
  return Promise.all(userBreweries.map(id => getBrewery("/" + id)))
}

class User extends Component {
  static contextType = AuthContext

  state = {
    user: {
      memberSince: '',
      userName: '',
    },
    userBreweries: [],
  }

  componentDidMount() {
    const { currentUser } = this.context
    console.log('User', currentUser)
    db.doc(`users/${currentUser.uid}`)
      .get()
      .then(doc => {
        if (doc.exists) {
          let data = doc.data()
          return data
        } else {
          throw new Error("No such document!")
        }
      })
      .then(data => {
        const { userBreweries, memberSince, userName } = data
        console.log('data', data)
        let timeStamp = memberSince.toDate()
        this.setState({user: {
          memberSince: timeStamp,
          userName: userName,
        }})
        return getUserBreweries(userBreweries)
      })
      .then(breweries => this.setState({userBreweries: breweries}))
      .catch(error => {
        console.log("Error getting document:", error)
      })
  }

  render() {
    const { userBreweries } = this.state
    // const { userName, memberSince } = this.state.user

    return (
      <Container>
        <PortraitIcon />
        <Headline>My watering holes</Headline>
        {userBreweries.map(brewery => (
          <BreweryList key={brewery.id}>
            <li>
              {brewery.name} - {brewery.city}, {abbrState(brewery.state)}
            </li>
          </BreweryList>
        ))}
      </Container>
    )
  }
}

export default User
