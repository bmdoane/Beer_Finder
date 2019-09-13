import React from 'react'

function Alert({ alert }) {
  const { msg } = alert

  return (
    <div className='container' style={{ padding: '20px 10px' }}>
      <h5 className='tac'>{msg}</h5>
    </div>
  )
}

export default Alert