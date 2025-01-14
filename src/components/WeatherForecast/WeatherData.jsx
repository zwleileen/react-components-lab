import WeatherForecast from "./WeatherForecast";

export default function WeatherData() {

const weatherForecasts = [
    {
      day: 'Mon',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];

  return (
    <>
    {weatherForecasts.map((weatherForecast) => (
            <WeatherForecast key={weatherForecast.day} day={weatherForecast.day} img={weatherForecast.img} imgAlt={weatherForecast.imgAlt} conditions={weatherForecast.conditions} time={weatherForecast.time} />
        ))}
    </>
  )

}

// Notes: 
// The map function takes each object from the weatherForecasts array
// For each object, it creates a WeatherForecast component
// It passes the object's properties as props to that component
// Each WeatherForecast component then passes the img and imgAlt to its WeatherIcon component

// The map function creates this:
// {/* <ul>
//   <WeatherForecast 
//     key="Monday"
//     day="Monday" 
//     img="sunny.jpg"
//     imgAlt="Sunny weather"
//     conditions="Sunny"
//     time="12:00"
//   />
//   <WeatherForecast 
//     key="Tuesday"
//     day="Tuesday"
//     img="rainy.jpg"
//     imgAlt="Rainy weather"
//     conditions="Rainy"
//     time="13:00"
//   />
// </ul> */}