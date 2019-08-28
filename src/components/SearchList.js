import React from 'react'


export default function SearchList({ breweries }) {
  return (
    <div className='container list'>
      <ul>
        {breweries.map((brew) => {
          const { name, city, state, id } = brew
          return (
            <li key={id} style={{ listStyleType: 'none', padding: '3px 0' }}>
              {`🍺 ${name}, ${city}, ${state}`}
            </li>
          )
        })}
      </ul>
    </div>
  )
}