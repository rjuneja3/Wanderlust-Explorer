// Observer.js
import React from 'react';

const WeatherObserver = ({ weatherData }) => {
  return (
    <div>
      {weatherData && (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Weather for {weatherData.name}</h2>
            <p className="card-text">Temperature: {weatherData.main.temp} &#176;C</p>
            <p className="card-text">Weather: {weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherObserver;
