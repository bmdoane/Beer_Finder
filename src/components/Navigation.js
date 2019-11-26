import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import useWindowSize from '../utils/windowSize'
import styled from 'styled-components'
import { auth } from '../Firebase'

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

const Navigation = () => {
  let brandLogo = "🍻BeerFinder🍻"
  const [width] = useWindowSize()
  if (width <= 450) {
    brandLogo = "🍻BF🍻";
  }
  return (
    <NavContainer>
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand href="/">{brandLogo}</Navbar.Brand>
        <NavbarLink to="/login">Sign In</NavbarLink>
        <NavbarLink to="/register">Register</NavbarLink>
        <NavbarLink to="/" onClick={() => auth.signOut()}>Sign Out</NavbarLink>
      </Navbar>
    </NavContainer>
  );
}

export default Navigation