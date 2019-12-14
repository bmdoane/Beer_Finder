import React, { useContext, useRef, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { NavLink } from 'react-router-dom'
import useWindowSize from '../utils/windowSize'
import { FaHome, FaUserPlus, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import styled from 'styled-components'
import { auth } from '../Firebase'
import { AuthContext } from '../services/Auth'

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

  const tooltipInsert = (navLink) => {
    const tooltip = (
      <Tooltip>{navLink}</Tooltip>
    )
    return tooltip
  }

  const { currentUser } = useContext(AuthContext)
  let UserNav = currentUser ? (
    <NavUserAccess>
      <OverlayTrigger
        trigger="hover"
        placement="bottom"
        overlay={tooltipInsert("Sign Out")}>
        <NavbarLink to="/" onClick={() => auth.signOut()}>
          <FaSignOutAlt />
        </NavbarLink>
      </OverlayTrigger>
    </NavUserAccess>
  ) : (
    <NavUserAccess>
      <OverlayTrigger
        trigger="hover"
        placement="bottom"
        overlay={tooltipInsert("Sign In")}>
        <NavbarLink to="/login">
          <FaSignInAlt />
        </NavbarLink>
      </OverlayTrigger>
      <OverlayTrigger
        trigger="hover"
        placement="bottom"
        overlay={tooltipInsert("Register")}>
        <NavbarLink to="/register">
          <FaUserPlus />
        </NavbarLink>
      </OverlayTrigger>
    </NavUserAccess>
  )

  return (
    <NavContainer>
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand>
          <NavbarLink to="/">
            {brandLogo}
          </NavbarLink>
        </Navbar.Brand>
        {UserNav}
      </Navbar>
    </NavContainer>
  );
}

export default Navigation