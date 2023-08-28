import "./App.css";
import SearchForm from "./SearcForm";
import WeatherInCity from "./WeatherInCity";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <SearchForm />
      <WeatherInCity />
      <Forecast />
      <Footer />
    </div>
  );
}
