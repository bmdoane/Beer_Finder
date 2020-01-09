import React, { forwardRef } from 'react'
import { NoteContainer, NoteCard, IconContainer, TrashIcon, EditIcon, NoteList, PageHeader, Btn, Label, TextArea } from './Notes.styles'

const Notes = forwardRef((props, ref) => {
  const { note, notes, hasNotes, handleChange, handleSubmit, deleteNote, setupEdit, isEditing, handleEdit } = props

  let noteList = (
    notes.map((note, i) => {
      return (
        <NoteCard key={i}>
          <NoteCard.Body>
            <NoteCard.Text>
              {note}
            </NoteCard.Text>
          </NoteCard.Body>
          <NoteCard.Footer>
            <IconContainer>
              <TrashIcon onClick={() => deleteNote(note, i)} />
              <EditIcon onClick={() => setupEdit(note)} />
            </IconContainer>
          </NoteCard.Footer>
        </NoteCard>
      )
    })
  )

  let brewNotes = hasNotes ? <div>{noteList}</div> : <p>Please add notes</p>

  let inputLabel = !isEditing ? <Label>Add a note about this establishment:</Label> : <Label>Edit your poorly chosen words:</Label>

  let handleNote = !isEditing ?
    <Btn
      variant="secondary"
      type="button"
      onClick={e => handleSubmit(e)}
    >Add Note</Btn> :
    <Btn
      variant="success"
      type="button"
      onClick={e => handleEdit(e)}
    >Confirm Edit</Btn>

  return (
    <NoteList>
      <NoteContainer>
        <PageHeader>Observations:</PageHeader>
        {brewNotes}
        {inputLabel}
        <TextArea
          ref={ref}
          id="edit"
          rows="5"
          name="note"
          placeholder="The beer here is..."
          onChange={e => handleChange(e)}
          value={note}
        />
        {handleNote}
      </NoteContainer>
    </NoteList>
  )
})

export default Notes