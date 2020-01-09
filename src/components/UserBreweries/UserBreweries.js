import React, { Component, createRef } from 'react'
import db from '../../Firebase'
import { firestore } from 'firebase/app'
import { AuthContext } from '../../context/Auth'
import { Container } from './UserBreweries.styles'
import { LinkWrapper, HomeLink } from '../../utils/styles/global'
import LoadSpinner from '../../components/UI/Spinner/Spinner'
import Notes from './Notes/Notes'

class UserBreweries extends Component {
  static contextType = AuthContext

  state = {
    isLoading: true,
    isEditing: false,
    editNote: '',
    note: '',
    notes: [],
    hasNotes: true,
    brewery: null,
    userId: null,
  }
  inputRef = createRef()

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
          this.setState({
            hasNotes: false
          })
        } else {
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

  postNote = (note) => {
    const { userId, brewery } = this.state
    db.doc(`breweries/${userId}`)
      .update({
        [brewery.id]: firestore.FieldValue.arrayUnion(note)
      })
  }

  deleteNote = (note, i) => {
    let { notes, userId, brewery } = this.state
    notes.splice(i, 1)
    this.setState({
      notes,
    })
    db.doc(`breweries/${userId}`)
      .update({
        [brewery.id]: firestore.FieldValue.arrayRemove(note)
      })
  }

  setupEdit = (note) => {
    console.log('setupEdit', note)
    this.setState({
      isEditing: true,
      note,
      editNote: note,
    })
    this.inputRef.current.focus()
  }

  editNotes = (updatedNotes) => {
    let { userId, brewery } = this.state
    db.doc(`breweries/${userId}`)
      .update({
        [brewery.id]: updatedNotes
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
    this.postNote(note)
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
      note: '',
      hasNotes: true,
    }))
  }

  handleEdit = (e) => {
    e.preventDefault()
    const { note, notes, editNote } = this.state
    let otherNotes = notes.filter(el => el !== editNote)
    let updatedNotes = [...otherNotes, note]
    this.editNotes(updatedNotes)
    this.setState({
      notes: updatedNotes,
      note: '',
      isEditing: false,
    })
  }

  render() {
    const { brewery, isLoading, note, notes, hasNotes, isEditing } = this.state

    let headline = isLoading ? <LoadSpinner /> : <h1>{brewery.name}</h1>

    return (
      <Container>
        {headline}
        <Notes
          ref={this.inputRef}
          note={note}
          notes={notes}
          hasNotes={hasNotes}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          deleteNote={this.deleteNote}
          setupEdit={this.setupEdit}
          isEditing={isEditing}
          handleEdit={this.handleEdit}
        />
        <LinkWrapper>
          <HomeLink to="/">Find another brewery</HomeLink>
        </LinkWrapper>
      </Container>
    )
  }
}

export default UserBreweries