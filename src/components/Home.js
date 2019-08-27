import React, { Component } from 'react'
import SearchBar from './SearchBar'

class Home extends Component {
  state = {
    searchName: {
      search: '',
      valid: false,
    },
    searchCity: {
      search: '',
      valid: false,
    },
    searchState: {
      search: '',
      valid: false,
    },
    searchTerms: [],
    alert: 'Please add search term to at least one field above.'
  }

  handleTerms = (e) => {
    const inputValue = e.target.value
    const term = e.target.name
    inputValue.length > 0
      ? this.setState(() => ({
        [term]: {
          search: inputValue,
          valid: true
        }
      }))
      : this.setState(() => ({
        [term]: {
          search: inputValue,
          valid: false
        }
      }))
  }

  sortTerm = (term) => {
    console.log('this fired', term)
    const { searchName, searchCity, searchState } = this.state
    if ((term === searchName) && (term.valid === true)) {
      return `by_name=${searchName.search}`
    } else if ((term === searchCity) && (term.valid === true)) {
      return `by_city=${searchCity.search}`
    } else if ((term === searchState) && (term.valid === true)) {
      return `by_state=${searchState.search}`
    } else {
      return ''
    }
  }

  addTerms = (term1, term2, term3) => {
    this.setState(prevState => ({
      searchTerms: [this.sortTerm(term1), this.sortTerm(term2), this.sortTerm(term3), ...prevState.searchTerms]
    }))
  }

  shorten = () => {
    this.setState(prevState => ({
      searchTerms: prevState.searchTerms.filter(term => term !== '')
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { searchName, searchCity, searchState, alert } = this.state
    if (searchName.search === '' && searchCity.search === '' && searchState.search === '') {
      console.log('alert', alert)
    }
    this.addTerms(searchName, searchCity, searchState)
    this.shorten()
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