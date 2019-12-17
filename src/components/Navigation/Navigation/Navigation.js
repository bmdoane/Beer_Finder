import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import useWindowSize from '../../../utils/windowSize'
import NavUserLinks from '../NavUserLinks/NavUserLinks'
import { NavContainer, NavbarLink } from './Navigation.styles'

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