import Card from 'react-bootstrap/Card'
import { FaTrash, FaPencilAlt, FaPlus, FaMinus } from 'react-icons/fa'
import styled from 'styled-components'
import { colors } from '../../../utils/styles/helper'

const { bfGray, bsDark, linkHover } = colors

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PlusIcon = styled(FaPlus)`
  color: ${bsDark};
  font-size: 14px;
  align-self: flex-end;
  :hover {
    color: ${linkHover};
  }
`

export const MinusIcon = styled(FaMinus)`
  color: ${bsDark};
  font-size: 14px;
  align-self: flex-end;
  :hover {
    color: ${linkHover};
  }
`

export const NoteCard = styled(Card)`
  width: 100%;
  margin-bottom: 5px;
  border: solid 1px ${bfGray};
  & .card-body {
    padding: 5px;
  }
  & .card-footer {
    display: flex;
    justify-content: flex-end;
    padding: 5px;
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

`