import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import map from '../images/map.png'

export default class Breweries extends Component {

  render() {
    const { brewery } = this.props.location.state
    return (
      <div className='container'>
        <Card bg="light" border="primary">
          <Card.Header className='text-center' as='h3'>{brewery.name}</Card.Header>
          <Card.Body>
            <Card.Text style={{margin: 0}}>
              {brewery.street}
            </Card.Text>
            <Card.Text style={{ margin: 0 }}>
              {`${brewery.city}, ${brewery.state}`}
            </Card.Text>
            <Card.Text style={{ margin: '0 0 20 0'}}>
              {brewery.postal_code}
            </Card.Text>
            <Card.Text style={{ margin: 0 }}>
              {brewery.phone}
            </Card.Text>
            <Card.Text style={{ margin: '0 0 20 0' }}>
              {brewery.website_url}
            </Card.Text>
            <Card.Text className='text-center' style={{ margin: '0 auto 20 auto' }}>
              <img alt='brewery map' src={map} href='' />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}