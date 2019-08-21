import React, { Component } from 'react'
import SearchBar from './SearchBar'

class Home extends Component {
  state = {
    searchName: '',
    searchCity: '',
    searchState: '',
    searches: [],
  }

  handleName = (e) => {
    this.setState({
      searchName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      searches: [prevState.searchName, ...prevState.searches],
      searchName: ''
    }))
  }

  render() {
    console.log('this.state', this.state)
    const { searchName } = this.state

    return (
      <div>
        <SearchBar
          handleName={this.handleName}
          handleSubmit={this.handleSubmit}
          searchName={searchName}
        />
      </div>
    )
  }
}

export default Home