import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Layout from './hoc/Layout'
import BeerFinder from './containers/BeerFinder/BeerFinder'
import Brewery from './containers/Brewery/Brewery'

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path='/' exact component={BeerFinder} />
            <Route path='/brewery' component={Brewery} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App