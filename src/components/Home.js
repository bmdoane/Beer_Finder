import React, { Component } from 'react'
import {
  getByOneTerm,
  getByTwoTerms,
  getByThreeTerms
} from '../utils/api'
import SearchBar from './SearchBar'
import SearchList from './SearchList'

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
    searchMade: false,
    searchTerms: [],
    alert: 'Please add search term to at least one field above.',
    breweries: [],
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

  trimEmptyTerms = () => {
    this.setState(prevState => ({
      searchTerms: prevState.searchTerms.filter(term => term !== '')
    }), () => { this.returnBeer() })
  }

  returnBeer = () => {
    const { searchTerms } = this.state
    console.log('searchTerms', searchTerms)
    if (searchTerms.length === 1) {
      getByOneTerm(searchTerms[0])
        .then((data) => {
          console.log('data', data)
          this.setState({
            breweries: data,
            searchMade: true,
          })
        })
    } else if (searchTerms.length === 2) {
      getByTwoTerms(searchTerms[0], searchTerms[1])
        .then((data) => {
          this.setState({
            breweries: data,
            searchMade: true,
          })
        })
    } else if (searchTerms.length === 3) {
      getByThreeTerms(searchTerms[0], searchTerms[1], searchTerms[2])
        .then((data) => {
          this.setState({
            breweries: data,
            searchMade: true,
          })
        })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('this', this)
    const { searchName, searchCity, searchState, alert } = this.state
    if (searchName.search === '' && searchCity.search === '' && searchState.search === '') {
      // Need a solution to wrap this up
      console.log('alert', alert)
    }
    this.addTerms(searchName, searchCity, searchState)
    this.trimEmptyTerms()
  }


  render() {
    console.log('this.state', this.state)
    const { searchName, searchCity, searchState, searchMade, breweries } = this.state

    return (
      <React.Fragment>
        <SearchBar
          handleTerms={this.handleTerms}
          handleSubmit={this.handleSubmit}
          searchName={searchName}
          searchCity={searchCity}
          searchState={searchState}
          breweries={breweries}
          searchMade={searchMade}
        />
        <SearchList
          breweries={breweries}
          searchMade={searchMade}
        />
      </React.Fragment>
    )
  }
}

export default Home