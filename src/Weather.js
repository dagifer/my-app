import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Edinburgh</h1>
      <ul>
        <li>Sunday 09:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="sunny"
            />
            <span className="temperature">17</span>{" "}
            <span className="units">°C</span>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity:</li>
            <li>Wind:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
