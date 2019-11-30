import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import GoogleMapsContainer from './Map'
import styled from 'styled-components'
import db from '../Firebase'
import { AuthContext } from "../containers/Auth/Auth";

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

  const addBrewery = brewery => {
    console.log('Hello')
    db.collection("breweries")
      .add({
        id: brewery.id,
        name: brewery.name,
        street: brewery.street,
        city: brewery.city,
        state: brewery.state,
        postal_code: brewery.postal_code,
        country: brewery.country,
        phone: brewery.phone,
        latitude: brewery.latitude,
        longitude: brewery.longitude,
        tag_list: brewery.tag_list,
        updated_at: brewery.updated_at,
        website_url: brewery.website_url
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id)
      })
      .catch(function(error) {
        console.error("Error adding document: ", error)
      })
  }

  const { currentUser } = useContext(AuthContext)
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