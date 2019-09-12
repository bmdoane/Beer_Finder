import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

const mapStyles = {
  position: 'absolute',
  width: '300px',
  height: '300px',
  textAlign: 'center'
}

class GoogleMapsContainer extends Component {
  render() {
    const { name, latitude, longitude } = this.props.brewery
    return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: latitude,
            lng: longitude
            }}
        >
          <Marker
          name={name}
            position={{ lat: latitude, lng: longitude }} />
        </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'apiKey'
})(GoogleMapsContainer);