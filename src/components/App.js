import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    )
  }
}

export default App