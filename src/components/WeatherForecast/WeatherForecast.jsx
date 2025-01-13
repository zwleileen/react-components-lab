import './WeatherForecast.css'
import debug from "debug";
const log = debug("react-components-lab:components:WeatherForecast");
log("debugging")

export default function WeatherForecast() {
log("This is weatherforecast")

return (
<div className="weather">
  <h2>Day of the Week</h2>
  <img src="" alt="" />
  <p><span>conditions: </span>current weather conditions</p>
  <p><span>time: </span>time of day</p>
</div>
)}