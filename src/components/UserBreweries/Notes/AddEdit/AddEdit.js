import React from 'react'
import { Label, TextArea, Btn } from './AddEdit.styles'

const AddEdit = (props) => {
  const { note, isEditing, handleChange, handleEdit, handleSubmit } = props

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
    <>
      {inputLabel}
      <TextArea
        autoFocus
        rows="5"
        name="note"
        placeholder="The beer here is..."
        onChange={e => handleChange(e)}
        value={note}
      />
      {handleNote}
    </>
  )
}

export default AddEdit