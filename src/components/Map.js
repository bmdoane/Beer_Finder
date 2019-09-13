import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const mapStyles = {
  position: 'absolute',
  width: '300px',
  height: '300px',
  textAlign: 'center'
}

class GoogleMapsContainer extends Component {
  render() {
    const { name, latitude, longitude } = this.props.brewery
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        containerStyle={{ width: '300px', height: '300px' }}
        initialCenter={{
          lat: latitude,
          lng: longitude
          }}
      >
        <Marker
          name={name}
          position={{ lat: latitude, lng: longitude }}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(GoogleMapsContainer);