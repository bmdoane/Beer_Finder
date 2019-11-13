import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import GoogleMapsContainer from './Map'
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
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
    return num.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }
  return num
}

const urlFormat = (url) => {
  return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
}

const Brewery = (props) => {
    const { brewery } = props.location.state
    return (
      <Container>
        <Card bg="light" border="secondary" style={{ width: "320px" }}>
          <Card.Header className="text-center" as="h3">
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
            <BtnWrapper>
              <Link to="/">
                <Button
                  variant="secondary"
                  block
                  onClick={() => {
                    console.log("this fired");
                  }}
                >
                  Keep fishing
                </Button>
              </Link>
            </BtnWrapper>
          </Card.Body>
        </Card>
      </Container>
    )

}

export default Brewery