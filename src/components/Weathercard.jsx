import React from "react";

const Weathercard = ({cityWeather}) => {
  return (
    <div className="weather-cards">
        <div
      className="weather-card"
    >
      <h3>Temperature</h3>
      <p>{cityWeather["temp_c"]}&deg;C</p>
    </div>
    <div
    className="weather-card"
    >
      <h3>Humidity</h3>
      <p>{cityWeather.humidity}%</p>
    </div>
    <div
      className="weather-card"
    >
      <h3>Condition</h3>
      <p>{cityWeather.condition.text}</p>
    </div>
    <div
      className="weather-card"
    >
      <h3>Wind Speed</h3>
      <p>{cityWeather["wind_kph"]}kph</p>
    </div>
    </div>
  );
};

export default Weathercard;
