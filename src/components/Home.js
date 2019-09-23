import React, { Component } from 'react'
import States from 'datasets-us-states-abbr-names'
import {
  getByOneTerm,
  getByTwoTerms,
  getByThreeTerms
} from '../utils/api'
import SearchBar from './SearchBar'
import SearchList from './SearchList'
import Alert from './Alert'

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
    alert: {
      msg: 'Please add at least one search term to fields above.',
      status: false,
    },
    breweries: [],
  }

  componentDidUpdate() {

  }

  handleTerms = (e) => {
    console.log('e', e)
    const inputValue = e.target.value
    const term = e.target.name
    inputValue.length > 0
      ? this.setState((prevState) => ({
        [term]: {
          search: inputValue,
          valid: true
        },
        alert: {
          ...prevState.alert,
          status: false
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

  noTerms = (name, city, state) => {
    if (name.search === '' && city.search === '' && state.search === '') {
      this.setState({...this.state, alert: {
        ...this.state.alert,
        status: true
      }})
    }
  }

  stateAbbreviation = (stateTerm) => {
    if (stateTerm.length === 2) {
      this.setState(prevState => ({
        searchState: {
          ...prevState.searchState,
          search: States[stateTerm.toUpperCase()]
        }
      }), () => this.addTerms(this.state.searchName, this.state.searchCity, this.state.searchState))
    } else {
      this.addTerms(this.state.searchName, this.state.searchCity, this.state.searchState)
    }
  }

  addTerms = (term1, term2, term3) => {
    this.setState(prevState => ({
      searchTerms: [this.sortTerm(term1), this.sortTerm(term2), this.sortTerm(term3), ...prevState.searchTerms]
    }), () => this.trimEmptyTerms())
  }

  trimEmptyTerms = () => {
    this.setState(prevState => ({
      searchTerms: prevState.searchTerms.filter(term => term !== '')
    }), () => this.returnBeer())
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
          console.log('data', data)
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
    const { searchName, searchCity, searchState } = this.state
    this.stateAbbreviation(searchState.search)
    this.noTerms(searchName, searchCity, searchState)
  }

  render() {
    console.log('this.state', this.state)
    const { searchName, searchCity, searchState, searchMade, breweries, alert } = this.state

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
        {alert.status === true ? <Alert alert={alert} /> : null}
        <SearchList
          breweries={breweries}
          searchMade={searchMade}
        />
      </React.Fragment>
    )
  }
}

export default Home