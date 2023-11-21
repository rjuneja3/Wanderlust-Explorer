// GoogleMap.js

import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const GoogleMaps = ({ google, location }) => {
  const mapStyles = {
    position: 'relative',
    width: '80%',
    height: '300px',
  };

  return (
    <div class="maps-wrapper" style={{ position: 'relative', height:'350px' }}>
        <Map
        google={google}
        zoom={8}
        style={mapStyles}
        initialCenter={{
            lat: location.lat,
            lng: location.lon,
        }}
        >
        <Marker name={'Current Location'} position={{ lat: location.lat, lng: location.lon }} />
        </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(GoogleMaps);
