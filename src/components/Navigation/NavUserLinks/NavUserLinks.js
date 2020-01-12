import React, { useContext } from 'react'
import { addToolTip } from '../../../utils/helper'
import { FaHome, FaUser, FaUserPlus, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { NavbarLink, NavUserAccess } from './NavUserLinks.styles'
import { auth } from '../../../Firebase'
import { AuthContext } from '../../../context/Auth'

const NavUserLinks = () => {

  const { currentUser } = useContext(AuthContext)
  let userNav = currentUser ? (
    <NavUserAccess>
      {addToolTip("User",
        <NavbarLink to="/user">
          <FaUser />
        </NavbarLink>)}
      {addToolTip("Sign Out",
        <NavbarLink to="/" onClick={() => auth.signOut()}>
          <FaSignOutAlt />
        </NavbarLink>)}
      {addToolTip("Home",
        <NavbarLink to="/">
          <FaHome />
        </NavbarLink>)}
    </NavUserAccess>
  ) : (
    <NavUserAccess>
      {addToolTip("Sign In",
        <NavbarLink to="/login">
          <FaSignInAlt />
        </NavbarLink>)}
      {addToolTip("Register",
        <NavbarLink to="/register">
          <FaUserPlus />
        </NavbarLink>)}
      {addToolTip("Home",
        <NavbarLink to="/">
          <FaHome />
        </NavbarLink>)}
    </NavUserAccess>
  );

  return (
    <>
      {userNav}
    </>
  )
}

export default NavUserLinks