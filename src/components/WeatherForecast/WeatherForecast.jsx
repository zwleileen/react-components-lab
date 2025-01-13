import './WeatherForecast.css'
// import WeatherIcon from './WeatherIcon'
import debug from "debug";
const log = debug("react-components-lab:components:WeatherForecast");
log("debugging")

export default function WeatherForecast(props) {
return (
<div className="weather">
  <h2>{props.day}</h2>
  {/* <WeatherIcon/> */}
  <p><span>conditions: </span>{props.conditions}</p>
  <p><span>time: </span>{props.time}</p>
</div>
)}