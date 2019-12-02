import React, { useContext } from "react";
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import useWindowSize from '../utils/windowSize'
import styled from 'styled-components'
import { auth } from '../Firebase'
import { AuthContext } from '../services/Auth'

const NavContainer = styled.div`
  min-width: 320px;
`

const NavbarLink = styled(NavLink)`
  color: #ffffff;
  :hover {
    color: #ccc;
    text-decoration: none;
  }
`

const NavUserAccess = styled.div`
  justify-content: right;
  a:last-child {
    padding-left: 20px;
  }
`

const Navigation = () => {
  let brandLogo = "🍻BeerFinder🍻"
  const [width] = useWindowSize()
  if (width <= 450) {
    brandLogo = "🍻BF🍻";
  }

  const { currentUser } = useContext(AuthContext)
  let UserNav = currentUser ? (
    <NavbarLink to="/" onClick={() => auth.signOut()}>
      Sign Out
    </NavbarLink>
  ) : (
    <NavUserAccess>
      <NavbarLink to="/login">Sign In</NavbarLink>
      <NavbarLink to="/register">Register</NavbarLink>
    </NavUserAccess>
  );

  return (
    <NavContainer>
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand href="/">{brandLogo}</Navbar.Brand>
        {UserNav}
      </Navbar>
    </NavContainer>
  );
}

export default Navigation