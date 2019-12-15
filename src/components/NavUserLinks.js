import React, { useContext } from 'react'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { NavLink } from 'react-router-dom'
import { FaHome, FaUser, FaUserPlus, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import styled from 'styled-components'
import { auth } from '../Firebase'
import { AuthContext } from '../services/Auth'

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
  a:not(:first-child) {
    padding-left: 20px;
  }
`;

const NavUserLinks = () => {
  const tooltipInsert = navLink => {
    const tooltip = <Tooltip>{navLink}</Tooltip>
    return tooltip
  }

  const { currentUser } = useContext(AuthContext)
  let userNav = currentUser ? (
    <NavUserAccess>
      <OverlayTrigger
        trigger="hover"
        placement="bottom"
        overlay={tooltipInsert("User")}>
        <NavbarLink to="/user">
          <FaUser />
        </NavbarLink>
      </OverlayTrigger>
      <OverlayTrigger
        trigger="hover"
        placement="bottom"
        overlay={tooltipInsert("Sign Out")}>
        <NavbarLink to="/" onClick={() => auth.signOut()}>
          <FaSignOutAlt />
        </NavbarLink>
      </OverlayTrigger>
      <OverlayTrigger
        trigger="hover"
        placement="bottom"
        overlay={tooltipInsert("Home")}>
        <NavbarLink to="/">
          <FaHome />
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
      <OverlayTrigger
        trigger="hover"
        placement="bottom"
        overlay={tooltipInsert("Home")}>
        <NavbarLink to="/">
          <FaHome />
        </NavbarLink>
      </OverlayTrigger>
    </NavUserAccess>
  );

  return (
    <>
      {userNav}
    </>
  )
}

export default NavUserLinks