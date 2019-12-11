import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Layout extends Component {
  render() {
    return (
      <MainContainer>
        <Navigation />
        {this.props.children}
      </MainContainer>
    );
  }
}

export default Layout