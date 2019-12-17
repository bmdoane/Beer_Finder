import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../utils/styles/helper'

const { linkText, linkHover } = colors;

export const NavbarLink = styled(NavLink)`
  color: ${linkText};
  font-size: 24px;
  :hover {
    color: ${linkHover};
    text-decoration: none;
  }
`;

export const NavUserAccess = styled.div`
  justify-content: right;
  a:not(:first-child) {
    padding-left: 20px;
  }
`;