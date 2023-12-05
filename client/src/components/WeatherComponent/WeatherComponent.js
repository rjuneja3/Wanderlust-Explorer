// Weather.js

import React, { useState } from 'react';
import axios from 'axios';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import Wikipedia from '../Wikipedia/Wikipedia';
import './WeatherComponent.css'; // Import the CSS file
import WeatherObserver from './WeatherObserver';
import WeatherSubject from './WeatherSubject';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const weatherSubject = new WeatherSubject();
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
      );
      setWeatherData(response.data);
      weatherSubject.notifyObservers(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Location Information Search</h1>
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

      {weatherData && (
        <div className="card">
        <WeatherObserver weatherData={weatherData}/>
          <GoogleMaps location={weatherData.coord} />
          <Wikipedia locationName={weatherData.name} />
        </div>
      )}
    </div>
  );
};

export default Weather;
