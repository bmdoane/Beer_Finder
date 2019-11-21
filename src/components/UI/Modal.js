import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 260px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  margin:  60px 10px 20px 10px;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
`

const Modal = (props) => {
  return (
    <ModalContainer>
      {props.children}
    </ModalContainer>
  )
}

export default Modal