import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import { colors } from '../../../../utils/styles/helper'

const { bfGray } = colors

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

export const Btn = styled(Button)`
  width: 150px;
  margin-bottom: 15px;
`