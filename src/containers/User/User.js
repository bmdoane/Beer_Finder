import React, { Component } from 'react'
import { Link } from "react-router-dom";
import db from '../../Firebase'
import States from 'datasets-us-states-abbr-names'
import { AuthContext } from '../../services/Auth'
import { getBrewery } from '../../utils/api'
import { MdPortrait } from 'react-icons/md'
import LoadSpinner from '../../components/UI/Spinner'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 450px;
  margin: 0 auto 40px;
`

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 450px) {
    justify-content: center;
    width: 100%;
  }
`

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  & div:first-child {
    margin-top: 40px;
  }
  @media (max-width: 450px) {
    align-items: center;
    width: 100%;
    & div:first-child {
      margin-top: 0;
    }
  }
`

const PortraitIcon = styled(MdPortrait)`
  color: #343a40;
  font-size: 180px;
  @media (max-width: 450px) {
    font-size: 108px;
  }
`

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
`

const BreweryLink = styled(Link)`
  color: #000;
  font-weight: bold;

  ::before {
    content: "🍺 ";
  }

  &:hover {
    color: red;
    text-decoration: none;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
`

const HomeLink = styled(Link)`
  color: #000;
  &:hover {
    color: #000;
    font-weight: bold;
    text-decoration: none;
  }
`

const abbrState = brewState => {
  return Object.keys(States).find(key => States[key] === brewState)
}

const getUserBreweries = userBreweries => {
  return Promise.all(userBreweries.map(id => getBrewery("/" + id)))
}

const dateFormat = date => {
  const formattedDate = date.split(" ").splice(1, 3)
  formattedDate[0] = `${formattedDate[0]}.`
  formattedDate[1] = `${formattedDate[1]},`
  const dateString = formattedDate.join(" ")
  return dateString
}

class User extends Component {
  static contextType = AuthContext

  state = {
    user: {
      memberSince: '',
      userName: '',
    },
    userBreweries: [],
    isLoading: true,
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
        this.setState({user: {
          memberSince: dateFormat(memberSince),
          userName: userName,
        }})
        return getUserBreweries(userBreweries)
      })
      .then(breweries => this.setState({
        userBreweries: breweries,
        isLoading: false,
      }))
      .catch(error => {
        console.log("Error getting document:", error)
      })
  }

  render() {
    const { currentUser } = this.context;
    const { userBreweries } = this.state
    const { userName, memberSince } = this.state.user

    let userProfile = (
      <>
        <UserContainer>
            <PortraitIcon />
            <Bio>
              <div>{userName}</div>
              <div>{currentUser.uid}</div>
              <div>Member since:</div>
              <div>{memberSince}</div>
            </Bio>
        </UserContainer>
        <Headline>Favorite watering holes</Headline>
        <BreweryList>
          {userBreweries.map(brewery => {
            const { name, city, state, id } = brewery;
            return (
              <li key={id}>
                <BreweryLink
                  to={{
                    pathname: "/userBrewery",
                    state: {
                      brewery: brewery
                    }
                  }}>
                  {name} - {city}, {abbrState(state)}
                </BreweryLink>
              </li>
            );
          })}
        </BreweryList>
        <LinkWrapper>
          <HomeLink to="/">Find another brewery</HomeLink>
        </LinkWrapper>
      </>
    )
    if (this.state.isLoading) {
      userProfile = <LoadSpinner />
    }
    return (
      <Container>
        {userProfile}
      </Container>
    );
  }
}

export default User
