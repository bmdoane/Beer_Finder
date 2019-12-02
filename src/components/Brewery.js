import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import GoogleMapsContainer from './Map'
import styled from 'styled-components'
import db from '../Firebase'
import { firestore } from 'firebase/app'
import { AuthContext } from '../services/Auth'

const Container = styled.div`
  margin: 0 auto;
`

const BrewCard = styled(Card)`
  width: 320px;
`

const GoogleWrapper = styled.div`
  width: 280px;
  height: 280px;
  margin: 0 auto;
  text-align: center;
`

const BtnWrapper = styled.div`
  padding-top: 20px;
`

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
  const addBrewery = brewery => {
    db.collection("users")
      .doc(currentUser.uid)
      .update({ userBreweries: firestore.FieldValue.arrayUnion(brewery.id) })
  }

  const addBreweryBtn = currentUser ? (
    <BtnWrapper>
      <Link to="/user">
        <Button
          variant="secondary"
          block
          onClick={addBrewery(brewery)}
        >
          Add Brewery
        </Button>
      </Link>
    </BtnWrapper>
  ) : null

  return (
    <Container>
      <BrewCard bg="light" border="secondary">
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
              href={brewery.website_url}
            >
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
                  console.log("this fired")
                }}
              >
                Keep fishing
              </Button>
            </Link>
          </BtnWrapper>
        </Card.Body>
      </BrewCard>
    </Container>
  )
}

export default Brewery