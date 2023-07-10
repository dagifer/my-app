import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: "Sunday 09:00",
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter your city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="units">°C</span>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity: {Math.round(weatherData.humidity)}</li>
              <li>Wind:{Math.round(weatherData.wind)}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";
  }
}
