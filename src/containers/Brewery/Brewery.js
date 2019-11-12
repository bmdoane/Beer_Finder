import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import GoogleMapsContainer from '../../components/Map'

function phoneFormat(num) {
  num = num.replace(/[^\d]/g, "");
  if (num.length === 10) {
    return num.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }
  return num
}

class Breweries extends Component {
  render() {
    const { brewery } = this.props.location.state
    return (
      <div className='container'>
        <Card bg="light" border="secondary" style={{ width: '340px' }}>
          <Card.Header className='text-center' as='h3'>{brewery.name}</Card.Header>
          <Card.Body>
            <Card.Text style={{ margin: 0 }}>
              {brewery.street}
            </Card.Text>
            <Card.Text style={{ margin: 0 }}>
              {`${brewery.city}, ${brewery.state}`}
            </Card.Text>
            <Card.Text style={{ margin: '0 0 20 0' }}>
              {brewery.postal_code}
            </Card.Text>
            <Card.Text style={{ margin: 0 }}>
              {phoneFormat(brewery.phone)}
            </Card.Text>
            <Card.Text style={{ margin: '0 0 20 0' }}>
              <a style={{ color: 'inherit', fontWeight: 'bold' }} href={brewery.website_url}>{brewery.website_url}</a>
            </Card.Text>
            <div className='text-center' style={{ width: '300px', height: '300px', margin: '0 auto' }}>
              <GoogleMapsContainer brewery={brewery} />
            </div>
            <div style={{ textAlign: 'center', padding: '20px 0 0 0' }}>
              <Link to='/'>
                <Button
                  variant="secondary"
                  block
                  onClick={() => { console.log('this fired')}}
                >
                  Keep fishing
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Breweries