import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  min-width: 280px;
  margin: 0 auto;
`;

class Layout extends Component {
  render() {
    return (
      <>
        <MainContainer>
          <Navbar />
          {this.props.children}
        </MainContainer>
      </>
    )
  }
}

export default Layout