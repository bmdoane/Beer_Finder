import React, { Component } from 'react'
import db from '../../Firebase'
import { firestore } from 'firebase/app'
import { AuthContext } from '../../context/Auth'
import { Container, PageHeader, NoteList, AddBtn, BeerList, LinkWrapper, HomeLink } from './UserBreweries.styles'
import LoadSpinner from '../../components/UI/Spinner/Spinner'
import Notes from './Notes/Notes'

class UserBreweries extends Component {
  static contextType = AuthContext

  state = {
    isLoading: true,
    note: '',
    notes: [],
    hasNotes: true,
    brewery: null,
    userId: null,
  }

  componentDidMount() {
    const { brewery } = this.props.location.state
    const { currentUser } = this.context

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
        if (breweryNotes === undefined || breweryNotes.length === 0) {
          console.log('This brewery has no notes', breweryNotes)
          this.setState({
            hasNotes: false
          })
        } else {
          console.log('Has breweryNotes', breweryNotes)
          this.setState({
            notes: breweryNotes,
          })
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

  postToFB = (note) => {
    const { userId, brewery } = this.state
    db.doc(`breweries/${userId}`)
      .update({
        [brewery.id]: firestore.FieldValue.arrayUnion(note)
      })
  }

  handleChange = (e) => {
    const inputValue = e.target.value
    this.setState({
      note: inputValue,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { note } = this.state
    this.postToFB(note)
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
      note: '',
      hasNotes: true,
    }))
  }

  render() {
    const { brewery, isLoading, note, notes, hasNotes } = this.state
    console.log('this.state', this.state)
    console.log('brew', brewery)
    console.log('notes', notes)

    let headline = isLoading ? <LoadSpinner /> : <h1>{brewery.name}</h1>

    return (
      <Container>
        {headline}
        <Notes
          note={note}
          notes={notes}
          hasNotes={hasNotes}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <BeerList>
          Beers
          <div>Add a favorite beer:</div>
          <div>Be able to star rate beers</div>
          <div>Wishlist beers text input</div>
        </BeerList>
        <LinkWrapper>
          <HomeLink to="/">Find another brewery</HomeLink>
        </LinkWrapper>
      </Container>
    )
  }
}

export default UserBreweries