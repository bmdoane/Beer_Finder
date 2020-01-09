import { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height:100%;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
    font-size: 16px;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
`

export const HomeLink = styled(Link)`
  color: #000;
  padding-right: 5px;
  &:hover {
    color: #000;
    font-weight: bold;
    text-decoration: none;
  }
`
