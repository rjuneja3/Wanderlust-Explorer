// GoogleMap.js

import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const GoogleMaps = ({ google, location }) => {
  const mapStyles = {
    width: '100%',
    height: '300px',
  };

  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: location.lat,
        lng: location.lon,
      }}
    >
      <Marker name={'Current Location'} position={{ lat: location.lat, lng: location.lon }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAF2kLryoYM9WqnKFeWiGBzqnNoW15qxw4',
})(GoogleMaps);
