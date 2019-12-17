import React, { Component } from 'react'
import db from '../../Firebase'
import States from 'datasets-us-states-abbr-names'
import { AuthContext } from '../../context/Auth'
import { getBrewery } from '../../utils/api'
import LoadSpinner from '../../components/UI/Spinner/Spinner'
import { Container, UserContainer, Bio, PortraitIcon, Headline, BreweryLink, BreweryList, LinkWrapper, HomeLink } from './User.styles'

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
                    pathname: "/userBreweries",
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
