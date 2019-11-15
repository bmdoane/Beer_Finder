import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  min-width: 320px;
  margin: 20px auto;
`;

class Layout extends Component {
  render() {
    return (
      <>
        <Navigation />
        <MainContainer>{this.props.children}</MainContainer>
      </>
    );
  }
}

export default Layout