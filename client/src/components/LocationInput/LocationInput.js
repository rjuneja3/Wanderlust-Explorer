// LocationInput.js
import React, { useState } from 'react';

const LocationInput = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location.trim() !== '') {
      onSearch(location);
    }
  };

  return (
    <div>
      <h1 className="mb-4">Weather Search</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationInput;
