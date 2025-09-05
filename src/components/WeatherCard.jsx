import React from "react";
import './style.css'

const WeatherCard = ({ weather }) => {
  return (
    <div className="card animate">
      <h2  style={{fontSize:"30px"}}>
        {weather.name}, {weather.country}
      </h2>
      <p  style={{fontSize:"20px"}} className="temp">{weather.temp}°C</p>
      <p  style={{fontSize:"20px"}}>{weather.desc}</p>
      <div className="details">
        <p style={{fontSize:"20px"}}>💨 Wind: {weather.wind} km/h</p>
        <p style={{fontSize:"20px"}}>💧 Humidity: {weather.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherCard;
