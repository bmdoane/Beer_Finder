import React from 'react'
import { addToolTip } from '../../../utils/helper'
import { NoteContainer, PlusIcon, MinusIcon, NoteCard, IconContainer, TrashIcon, EditIcon, NoteList, PageHeader } from './Notes.styles'
import AddEdit from './AddEdit/AddEdit'

const Notes = (props) => {
  const { note, notes, hasNotes, handleChange, handleSubmit, deleteNote, setupEdit, isEditing, handleEdit, isAdding, showInput, hideInput } = props

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
              {addToolTip("Trash", <TrashIcon onClick={() => deleteNote(note, i)} />)}
              {addToolTip("Edit", <EditIcon onClick={() => setupEdit(note)} />)}
            </IconContainer>
          </NoteCard.Footer>
        </NoteCard>
      )
    })
  )

  let inputStatus = !isAdding ?
    <>
      {addToolTip("Add note", <PlusIcon onClick = {() => showInput()} />)}
    </> :
    <>
      {addToolTip("Bail on note", <MinusIcon onClick={() => hideInput()} />)}
    </>

  let brewNotes = hasNotes ? <div>{noteList}</div> : <p>Please add notes</p>

  return (
    <NoteList>
      <NoteContainer>
        {inputStatus}
        {isAdding &&
        <AddEdit
          note={note}
          isEditing={isEditing}
          handleChange={handleChange}
          handleEdit={handleEdit}
          handleSubmit={handleSubmit}
        />}
        <PageHeader>Observations:</PageHeader>
        {brewNotes}
      </NoteContainer>
    </NoteList>
  )
}

export default Notes