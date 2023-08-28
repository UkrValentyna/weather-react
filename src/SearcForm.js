import React from "react";

export default function SeachForm() {
  return (
    <div className="SearchForm weather-app">
      <form className="input-form">
        <div className="row">
          <div className="col-sm-6">
            <input
              type="search"
              placeholder="Type a city..."
              className="input-placeholder"
            />
          </div>
          <div className="col-sm-3">
            <input type="submit" value="Search" className="input-submit" />
          </div>
          <div className="col-sm-3">
            <input type="submit" value="Current" className="input-submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
