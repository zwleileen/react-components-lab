// src/App.jsx
import './App.css';
import WeatherData from './components/WeatherForecast/WeatherData'
import debug from "debug"
const log = debug("react-components-lab:App");
log("debugging")

const App = () => {

  return (
  <>
    <h1>Local Weather</h1>
      <section>
      <WeatherData/>
      </section>
  </>
  );
}

export default App
