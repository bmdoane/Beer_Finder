import React, { Component } from 'react'
import States from 'datasets-us-states-abbr-names'
import {
  getByOneTerm,
  getByTwoTerms,
  getByThreeTerms
} from '../../utils/api'
import SearchBar from '../../components/SearchBar'
import SearchList from '../../components/SearchList'
import styled from "styled-components"

const Container = styled.div`
  max-width: 450px;
  margin: 0 auto;
`

class BeerFinder extends Component {
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
      addStatus: false,
      badStatus: false,
    },
    breweries: [],
  }

  dataCheck = () => {
      this.setState(prevState => ({
        searchName: {
          ...prevState.searchName,
          valid: false
        },
        searchCity: {
          ...prevState.searchCity,
          valid: false
        },
        searchState: {
          ...prevState.searchState,
          valid: false
        },
        searchTerms: [],
        alert: {
          ...prevState.alert,
          badStatus: true
        }
      }));
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
          addStatus: false
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
        addStatus: true
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
          if (data.length === 0) {
            this.dataCheck()
          } else {
            this.setState({
              breweries: data,
              searchMade: true,
              alert: {
                addStatus: false,
                badStatus: false,
              },
            })
          }
        })
    } else if (searchTerms.length === 2) {
      getByTwoTerms(searchTerms[0], searchTerms[1])
        .then((data) => {
          console.log('data', data)
          if (data.length === 0) {
            this.dataCheck();
          } else {
            this.setState({
              breweries: data,
              searchMade: true,
              alert: {
                addStatus: false,
                badStatus: false
              }
            })
          }
        })
    } else if (searchTerms.length === 3) {
      getByThreeTerms(searchTerms[0], searchTerms[1], searchTerms[2]).then(
        data => {
          if (data.length === 0) {
            this.dataCheck();
          } else {
            this.setState({
              breweries: data,
              searchMade: true,
              alert: {
                addStatus: false,
                badStatus: false
              }
            })
          }
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
      <Container>
        <SearchBar
          handleTerms={this.handleTerms}
          handleSubmit={this.handleSubmit}
          searchName={searchName}
          searchCity={searchCity}
          searchState={searchState}
          breweries={breweries}
          searchMade={searchMade}
          alert={alert}
        />
        <SearchList
          breweries={breweries}
          searchMade={searchMade}
        />
      </Container>
    )
  }
}

export default BeerFinder