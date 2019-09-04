import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchList({ breweries }) {
  return (
    <div className='container list'>
      <ul>
        {breweries.map((brew) => {
          const { name, city, state, id } = brew
          return (
            <li
              key={id}
              className='nameList'
            >
              <Link to={{
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
    </div>
  )
}