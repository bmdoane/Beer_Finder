import React, { Component } from 'react'
import { GoogleApiWrapper, Marker } from 'google-maps-react'
import { GoogleMap } from './Map.styles'

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
        containerStyle={{ width: '280px', height: '280px' }}
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