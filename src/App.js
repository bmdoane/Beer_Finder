import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Layout from './hoc/Layout'
import BeerFinder from './containers/BeerFinder/BeerFinder'
import Brewery from './components/Brewery/Brewery/Brewery'
import Login from './components/Access/Login/Login'
import Register from './components/Access/Register/Register'
import User from './containers/User/User'
import UserBreweries from './components/UserBreweries/UserBreweries'
import { AuthProvider } from './context/Auth'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { GlobalStyle } from './utils/styles/global'

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <GlobalStyle />
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact component={BeerFinder} />
              <Route path="/brewery" component={Brewery} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/user" component={User} />
              <PrivateRoute path="/userBreweries" component={UserBreweries} />
            </Switch>
          </Layout>
        </Router>
      </AuthProvider>
    );
  }
}

export default App