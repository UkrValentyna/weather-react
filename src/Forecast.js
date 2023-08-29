import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Icon from "./Icon";

export default function Forecast() {
  return (
    <span className="Forecast weather-app">
      <div className="row align-items-start">
        <div className="col-sm-2">
          Mon
          <br />
          <img src="" alt="cloudy" />
          <br />
          Cloudy
          <br />
          <strong>14°/ 6°</strong>
        </div>

        <div className="col-sm-2">
          Tue
          <br />
          <img src="" alt="cloudy" /> <br />
          Cloudy
          <br />
          <strong>14°/ 6°</strong>
        </div>

        <div className="col-sm-2">
          Wen
          <br />
          <img src="" alt="cloudy" />
          <br />
          Cloudy
          <br />
          <strong>14°/ 6°</strong>
        </div>

        <div className="col-sm-2">
          Thu
          <br />
          <img src="" alt="cloudy" />
          <br />
          Cloudy
          <br />
          <strong>14°/ 6°</strong>
        </div>

        <div className="col-sm-2">
          Fri
          <br />
          <img src="" alt="cloudy" />
          <br />
          Cloudy
          <br />
          <strong>14°/ 6°</strong>
        </div>

        <div className="col-sm-2">
          Sut
          <br />
          <img src="" alt="cloudy" />
          <br />
          Cloudy
          <br />
          <strong>14°/ 6°</strong>
        </div>
      </div>
    </span>
  );
}
