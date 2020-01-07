import React from 'react'
import { NoteContainer, TrashIcon, EditIcon, NoteList, PageHeader, AddBtn, Label, TextArea } from './Notes.styles'

const Notes = (props) => {
  const { note, notes, hasNotes, handleChange, handleSubmit } = props

  let noteList = (
    notes.map((note, i) => {
      return (
        <li key={i}>
          {note} <TrashIcon />
        </li>
      )
    })
  )

  let brewNotes = hasNotes ?
    <ul>{noteList}</ul>
    : <p>Please add notes</p>

  return (
    <NoteList>
      <NoteContainer>
        <PageHeader>Observations:</PageHeader>
        {brewNotes}
        <Label>Add a note about this establishment:</Label>
        <TextArea
          rows="5"
          name="note"
          placeholder="The beer here is..."
          onChange={e => handleChange(e)}
          value={note}
        />
        <AddBtn
          variant="secondary"
          type="button"
          onClick={e => handleSubmit(e)}
        >Add Note</AddBtn>
      </NoteContainer>
    </NoteList>
  )
}

export default Notes