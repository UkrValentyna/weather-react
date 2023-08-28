import React from "react";

export default function WeatherInCity() {
  let WeatherData = {
    temperature: 23,
    city: "London",
    date: "Sunday 10:05",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 70,
    wind: 8,
  };

  return (
    <div className="WeatherInCity">
      <div className="weather-app">
        <div className="row">
          <div className="col-sm-6">
            <h1>{WeatherData.city}</h1>
            <ul>
              <li className="small">Last updated: </li>
              <li>
                <strong className="time">{WeatherData.date}</strong>
                <br />
                <strong className="description">
                  {WeatherData.description}
                </strong>
              </li>
              <li>
                <strong className="humidity">
                  Humidity:{WeatherData.humidity}%
                </strong>
                <strong className="wind">, Wind:{WeatherData.wind}km/h</strong>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <span className="temperature-container">
              <div className="temperature-container d-flex justify-content-end">
                <img src={WeatherData.imgUrl} alt="sunny" className="big-img" />
                <span className="temperature">{WeatherData.temperature}</span>
                <span className="units">°C</span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
