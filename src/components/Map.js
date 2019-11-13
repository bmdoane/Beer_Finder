import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import styled from "styled-components";

const GoogleMap = styled(Map)`
  position: 'absolute',
  max-width: '280px',
  max-height: '280px',
  textAlign: 'center',
`


class GoogleMapsContainer extends Component {
  render() {
    const { name, latitude, longitude } = this.props.brewery
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <GoogleMap
        google={this.props.google}
        zoom={15}
        containerStyle={{ maxWidth: '280px', maxHeight: '280px' }}
        initialCenter={{
          lat: latitude,
          lng: longitude
          }}
      >
        <Marker
          name={name}
          position={{ lat: latitude, lng: longitude }}
        />
      </GoogleMap>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(GoogleMapsContainer);