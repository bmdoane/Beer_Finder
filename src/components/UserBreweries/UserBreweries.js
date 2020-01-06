import React, { Component } from 'react'
import db from '../../Firebase'
import { AuthContext } from '../../context/Auth'
import { Container, LinkWrapper, HomeLink } from './UserBreweries.styles'
import LoadSpinner from '../../components/UI/Spinner/Spinner'

class UserBreweries extends Component {
  static contextType = AuthContext

  state = {
    isLoading: true,
    note: '',
    notes: [],
    hasNotes: false,
    brewery: null,
    userId: null,
  }

  componentDidMount() {
    const { brewery } = this.props.location.state
    const { currentUser } = this.context
    // Get to list
    db.doc(`breweries/${currentUser.uid}`)
      .get()
      .then(doc => {
        if (doc.exists) {
          let breweryNotes = doc.data()
          return breweryNotes[brewery.id]
        } else {
          throw new Error("No such document!")
        }
      })
      .then(breweryNotes => {
        // Have to handle undefined data
        if (breweryNotes === undefined) {
          console.log('This brewery has no notes')
        } else {
          console.log('breweryNotes', breweryNotes)
        }
      })
      .catch(error => {
        console.log("Error getting document:", error)
      })
    this.setState({
      isLoading: false,
      brewery,
      userId: currentUser.uid,
    })
  }

  render() {
    const { brewery, isLoading, notes } = this.state
    console.log('brew', brewery)
    console.log('notes', notes)

    let headline = isLoading ? <LoadSpinner /> : <h1>{brewery.name}</h1>
    return (
      <Container>
        {headline}
        <div>Text area for notes:</div>
        <div>Add a favorite beer:</div>
        <div>Be able to star rate beers</div>
        <div>Wishlist beers text input</div>
        <LinkWrapper>
          <HomeLink to="/">Find another brewery</HomeLink>
        </LinkWrapper>
      </Container>
    )
  }
}

export default UserBreweries