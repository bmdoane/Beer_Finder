import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Brewery from './Brewery'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/brewery' component={Brewery} />
          </Switch>
        </div>
      </Router>
    )
  }
}