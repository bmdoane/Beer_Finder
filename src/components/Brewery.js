import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import map from '../images/map.png'

function phoneFormat(num) {
  num = num.replace(/[^\d]/g, "");
  if (num.length === 10) {
    return num.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }
  return num
}

export default class Breweries extends Component {

  render() {
    const { brewery } = this.props.location.state
    return (
      <div className='container'>
        <Card bg="light" border="secondary">
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
              {phoneFormat(brewery.phone)}
            </Card.Text>
            <Card.Text style={{ margin: '0 0 20 0' }}>
              <a style={{ color: 'inherit', fontWeight: 'bold' }} href={brewery.website_url}>{brewery.website_url}</a>
            </Card.Text>
            <Card.Text className='text-center' style={{ margin: '0 auto 0 auto' }}>
              <img alt='brewery map' src={map} href='' />
            </Card.Text>
          </Card.Body>
          <div style={{ textAlign: 'center', padding: '0 20px 20px 20px'}}>
            <Link to='/'>
              <Button
                variant="secondary"
                block
              >
                Keep fishing
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    )
  }
}