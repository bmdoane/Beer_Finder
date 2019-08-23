import React, { Component } from 'react'
import SearchBar from './SearchBar'

class Home extends Component {
  state = {
    searchName: {
      search: '',
      exists: false,
    },
    searchCity: {
      search: '',
      exists: false,
    },
    searchState: {
      search: '',
      exists: false,
    },
    searchTerms: [],
    alert: 'Please add search term to at least one field above.'
  }

  handleTerms = (e) => {
    const inputValue = e.target.value
    const term = e.target.name
    inputValue.length > 0
      ? this.setState(prevState => ({
        [term]: {
          search: inputValue,
          exists: true
        }
      }))
      : this.setState(prevState => ({
        [term]: {
          search: inputValue,
          exists: false
        }
      }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { searchName, searchCity, searchState, alert } = this.state
    if (searchName.search === '' && searchCity.search === '' && searchState.search === '') {
      console.log('alert', alert)
    }
  }


  render() {
    console.log('this.state', this.state)
    const { searchName, searchCity, searchState } = this.state

    return (
      <div>
        <SearchBar
          handleTerms={this.handleTerms}
          handleSubmit={this.handleSubmit}
          searchName={searchName}
          searchCity={searchCity}
          searchState={searchState}
        />
      </div>
    )
  }
}

export default Home