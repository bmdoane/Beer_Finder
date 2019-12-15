import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import useWindowSize from '../utils/windowSize'
import styled from 'styled-components'
import NavUserLinks from './NavUserLinks'

const NavContainer = styled.div`
  min-width: 320px;
`

const NavbarLink = styled(NavLink)`
  color: #ffffff;
  font-size: 24px;
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
        <Navbar.Brand>
          <NavbarLink to="/">
            {brandLogo}
          </NavbarLink>
        </Navbar.Brand>
        <NavUserLinks />
      </Navbar>
    </NavContainer>
  )
}

export default Navigation