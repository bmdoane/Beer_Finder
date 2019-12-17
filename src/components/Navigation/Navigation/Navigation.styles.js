import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../utils/styles/helper'

const { linkText, linkHover } = colors;

export const NavContainer = styled.div`
  min-width: 320px;
`;

export const NavbarLink = styled(NavLink)`
  color: ${linkText};
  font-size: 24px;
  :hover {
    color: ${linkHover};
    text-decoration: none;
  }
`;
