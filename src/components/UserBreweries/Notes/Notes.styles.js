import Button from 'react-bootstrap/Button'
import { FaTrash, FaPencilAlt } from 'react-icons/fa'
import styled from 'styled-components'
import { colors } from '../../../utils/styles/helper'

const { bfGray, bsDark, linkHover } = colors

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const IconContainer = styled.span`
  width: 40px;
  display: flex;
  justify-content: space-between;
`

export const TrashIcon = styled(FaTrash)`
  color: ${bsDark};
  font-size: 14px;
  :hover {
    color: ${linkHover};
  }
`

export const EditIcon = styled(FaPencilAlt)`
  color: ${bsDark};
  font-size: 14px;
  :hover {
    color: ${linkHover};
  }
`

export const PageHeader = styled.h5`
  font-weight: bold;
`

export const NoteList = styled.div`
  color: blue;
  & ul {
    padding: 0;
  }
  & li {
    list-style-type: none;
    padding: 3px 0;
  }
`
export const Btn = styled(Button)`
  width: 150px;
`

export const Label = styled.label`
  display: block;
  font-weight: bold;
`

export const TextArea = styled.textarea`
  width: 100%;
  border: solid 1px ${bfGray};
  border-radius: 3px;
  padding-left: 5px;
  margin-bottom: 15px;
`