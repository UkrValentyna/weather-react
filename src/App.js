import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App(props) {
  function displayWeather(response) {
    alert(`temperature in ${props.city} is ${response.data.main.temp}`);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=5b9aaac066641215de6d72f73af7e9b5&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  console.log(apiUrl);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
