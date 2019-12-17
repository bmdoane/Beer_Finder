import React, { Component } from 'react'
import States from 'datasets-us-states-abbr-names'
import { getBrewery } from '../../utils/api'
import SearchBar from '../../components/Search/SearchBar/SearchBar/SearchBar'
import SearchList from '../../components/Search/SearchList/SearchList'
import Quote from '../../components/Search/Quote/Quote'
import { Container } from './BeerFinder.styles'
import beerQuotes from '../../data/quotes'

class BeerFinder extends Component {
  state = {
    searchName: {
      search: "",
      valid: false
    },
    searchCity: {
      search: "",
      valid: false
    },
    searchState: {
      search: "",
      valid: false
    },
    searchMade: false,
    searchTerms: [],
    searchString: "",
    alert: {
      addStatus: false,
      badStatus: false
    },
    breweries: [],
    singleQuote: {}
  };

  componentDidMount() {
    const { quotes } = beerQuotes
    const singleQuote = quotes[Math.floor(Math.random() * quotes.length)]
    this.setState({ singleQuote })
  }

  handleTerms = e => {
    const inputValue = e.target.value;
    const term = e.target.name;
    inputValue.length > 0
      ? this.setState(prevState => ({
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
        }));
  };

  sortTerm = term => {
    const { searchName, searchCity, searchState } = this.state;
    if (term === searchName && term.valid === true) {
      return `by_name=${searchName.search}`;
    } else if (term === searchCity && term.valid === true) {
      return `by_city=${searchCity.search}`;
    } else if (term === searchState && term.valid === true) {
      return `by_state=${searchState.search}`;
    } else {
      return "";
    }
  };

  addTerms = (term1, term2, term3) => {
    this.setState(
      prevState => ({
        searchTerms: [
          this.sortTerm(term1),
          this.sortTerm(term2),
          this.sortTerm(term3),
          ...prevState.searchTerms
        ]
      }),
      () => this.combineTerms()
    );
  };

  combineTerms = () => {
    const { searchTerms } = this.state
    let searchArray = searchTerms
    searchArray = searchArray.filter(term => term !== "")
    let searchStr = searchArray.map(el =>
      searchArray.indexOf(el) === 0 ? "?" + el : "&" + el
    );
    this.setState({ searchString: searchStr.join("") }, () => this.returnBeer())
  };

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
  };

  returnBeer = () => {
    const { searchString } = this.state;
    getBrewery(searchString)
      .then(data => {
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
          });
        }
      });
  };

  stateAbbreviation = stateTerm => {
    if (stateTerm.length === 2) {
      this.setState(
        prevState => ({
          searchState: {
            ...prevState.searchState,
            search: States[stateTerm.toUpperCase()]
          }
        }),
        () =>
          this.addTerms(
            this.state.searchName,
            this.state.searchCity,
            this.state.searchState
          )
      );
    } else {
      this.addTerms(
        this.state.searchName,
        this.state.searchCity,
        this.state.searchState
      );
    }
  };

  noTerms = (name, city, state) => {
    if (name.search === "" && city.search === "" && state.search === "") {
      this.setState({
        ...this.state,
        alert: {
          ...this.state.alert,
          addStatus: true
        }
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchName, searchCity, searchState } = this.state;
    this.stateAbbreviation(searchState.search);
    this.noTerms(searchName, searchCity, searchState);
  };


  render() {
    const {
      searchName,
      searchCity,
      searchState,
      searchMade,
      breweries,
      alert,
      userId,
      singleQuote
    } = this.state;

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
        <SearchList breweries={breweries} userId={userId} />
        <Quote singleQuote={singleQuote} />
      </Container>
    );
  }
}

export default BeerFinder