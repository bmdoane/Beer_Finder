import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function SearchList({ breweries, searchMade }) {
  return (
    <div className='container list'>
      { (breweries.length === 0 && searchMade === true)
        ? <h5 className='tac'>No records were found for this search.  Please check spelling and refine search terms.</h5>
        : <ul>
            {breweries.map((brew) => {
              const { name, city, state, id } = brew
              return (
                <li
                  key={id}
                  className='nameList'
                >
                  <Link
                    style={{ color: '#000'}}
                    to={{
                    pathname: '/brewery',
                    state: {
                      brewery: brew
                    }
                  }}>
                    {`🍺 ${name}, ${city}, ${state}`}
                  </Link>
                </li>
              )
            })}
          </ul>
      }
    </div>
  )
}