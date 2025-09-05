import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./style.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false); // ✅ track if user searched

  const API_KEY = "99965037bf9c69c44feb342ce655e76f"; // Replace with OpenWeatherMap API Key

  const fetchWeather = async (city) => {
    if (!city) return;

    try {
      setError("");
      setSearched(true); // ✅ user has searched
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();

      setWeather({
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        desc: data.weather[0].description,
        name: data.name,
        country: data.sys.country,
      });
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div className="app">
      <h1 className="title">🌦 Weather App</h1>
      <SearchBar onSearch={fetchWeather} />

      {error && <p className="error">{error}</p>}

      {/* ✅ Show message if not searched yet */}
      <h1>Find weather report of any place </h1>

      <p>Easy Fetching and Real time updates </p>

      
      {/* ✅ Show weather card after searching */}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;


