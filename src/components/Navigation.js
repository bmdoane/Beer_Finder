import React from 'react'
import useWindowSize from '../utils/windowSize'
import styled from 'styled-components'

const NavContainer = styled.div`
  min-width: 320px;
`

const Navigation = () => {
  let brandLogo = "🍻BeerFinder🍻"
  const [width] = useWindowSize()
  if (width <= 450) {
    brandLogo = "🍻BF🍻";
  }
  return (
    <NavContainer>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          {brandLogo}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Noob
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </NavContainer>
  )
}

export default Navigation