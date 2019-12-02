import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Layout from './hoc/Layout'
import BeerFinder from './containers/BeerFinder/BeerFinder'
import Brewery from './components/Brewery'
import Login from './components/Login'
import Register from './components/Register'
import User from './containers/User/User'
import { AuthProvider } from './services/Auth'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact component={BeerFinder} />
              <Route path="/brewery" component={Brewery} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/user" component={User} />
            </Switch>
          </Layout>
        </Router>
      </AuthProvider>
    )
  }
}

export default App