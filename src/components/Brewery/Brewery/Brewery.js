import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import GoogleMapsContainer from '../Maps/Map'
import { Container, BrewCard, GoogleWrapper, BtnWrapper } from './Brewery.styles'
import db from '../../../Firebase'
import { firestore } from 'firebase/app'
import { AuthContext } from '../../../context/Auth'

const phoneFormat = (num) => {
  num = num.replace(/[^\d]/g, "");
  if (num.length === 10) {
    return num.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
  }
  return num
}

const urlFormat = (url) => {
  return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
}

const Brewery = (props) => {
  const { brewery } = props.location.state

  const { currentUser } = useContext(AuthContext)
  console.log('Brewery', currentUser)
  const addBrewery = brewery => {
    console.log('brews', brewery)
    db.doc(`users/${currentUser.uid}`)
      .update({ userBreweries: firestore.FieldValue.arrayUnion(brewery.id) })
  }

  const addBreweryBtn = currentUser ? (
    <BtnWrapper>
      <Link to="/user">
        <Button
          variant="secondary"
          block
          onClick={() => addBrewery(brewery)}
        >
          Add Brewery
        </Button>
      </Link>
    </BtnWrapper>
  ) : null

  return (
    <Container>
      <BrewCard className="border-dark" bg="light">
        <Card.Header as="h3" style={{ textAlign: "center" }}>
          {brewery.name}
        </Card.Header>
        <Card.Body>
          <Card.Text style={{ margin: 0 }}>{brewery.street}</Card.Text>
          <Card.Text style={{ margin: 0 }}>
            {`${brewery.city}, ${brewery.state}`}
          </Card.Text>
          <Card.Text style={{ margin: "0 0 20 0" }}>
            {brewery.postal_code}
          </Card.Text>
          <Card.Text style={{ margin: 0 }}>
            {phoneFormat(brewery.phone)}
          </Card.Text>
          <Card.Text style={{ margin: "0 0 20 0" }}>
            <a
              style={{ color: "inherit", fontWeight: "bold" }}
              href={brewery.website_url}>
              {urlFormat(brewery.website_url)}
            </a>
          </Card.Text>
          <GoogleWrapper>
            <GoogleMapsContainer brewery={brewery} />
          </GoogleWrapper>
          {addBreweryBtn}
          <BtnWrapper>
            <Link to="/">
              <Button
                variant="secondary"
                block
                onClick={() => {
                  console.log("this fired");
                }}>
                Keep fishing
              </Button>
            </Link>
          </BtnWrapper>
        </Card.Body>
      </BrewCard>
    </Container>
  );
}

export default Brewery