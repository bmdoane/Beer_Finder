import { Link } from 'react-router-dom'
import { MdPortrait } from 'react-icons/md'
import styled from 'styled-components'
import { colors } from '../../utils/styles/helper'

const { bsDark } = colors

export const Container = styled.div`
  max-width: 450px;
  margin: 0 auto 40px;
`;

export const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 450px) {
    justify-content: center;
    width: 100%;
  }
`

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  & div:first-child {
    margin-top: 40px;
  }
  @media (max-width: 450px) {
    align-items: center;
    width: 100%;
    & div:first-child {
      margin-top: 0;
    }
  }
`

export const PortraitIcon = styled(MdPortrait)`
  color: ${bsDark};
  font-size: 180px;
  @media (max-width: 450px) {
    font-size: 108px;
  }
`

export const Headline = styled.h3`
  text-align: center;
  margin-bottom: 14px;
`

export const BreweryList = styled.ul`
  padding: 0 20px;
  margin: 0 auto;

  & li {
    list-style-type: none;
    padding: 3px 0;
  }
`

export const BreweryLink = styled(Link)`
  color: #000;
  font-weight: bold;

  ::before {
    content: "🍺 ";
  }

  &:hover {
    color: red;
    text-decoration: none;
  }
`