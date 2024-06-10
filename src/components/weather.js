import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudSun, faCloud, faCloudRain, faWind, faSnowflake, faBolt, faSmog } from '@fortawesome/free-solid-svg-icons';

const getWeatherIcon = (weatherCode) => {
  switch (weatherCode) {
    case 1000: // Clear, Sunny
      return <FontAwesomeIcon icon={faSun} className="text-yellow-500" />;
    case 1100: // Mostly Clear
    case 1101: // Partly Cloudy
    case 11000:
    case 11001:
    case 11010:
    case 11011:
    case 11030:
    case 11031:
      return <FontAwesomeIcon icon={faCloudSun} className="text-yellow-500" />;
    case 1001: // Cloudy
    case 1102: // Mostly Cloudy
    case 10010:
    case 10011:
    case 11020:
    case 11021:
    case 11060:
    case 11061:
    case 11080:
    case 11081:
      return <FontAwesomeIcon icon={faCloud} className="text-gray-500" />;
    case 2000: // Fog
    case 2100: // Light Fog
    case 2103:
    case 21030:
    case 21031:
    case 2106:
    case 21060:
    case 21061:
    case 2107:
    case 21070:
    case 21071:
    case 2108:
    case 21080:
    case 21081:
      return <FontAwesomeIcon icon={faSmog} className="text-gray-500" />;
    case 4000: // Drizzle
    case 4200: // Light Rain
    case 4001: // Rain
    case 4201: // Heavy Rain
    case 40000:
    case 40001:
    case 42000:
    case 42001:
    case 40010:
    case 40011:
    case 42010:
    case 42011:
    case 42030:
    case 42031:
    case 42040:
    case 42041:
    case 42050:
    case 42051:
    case 42130:
    case 42131:
    case 42140:
    case 42141:
    case 42150:
    case 42151:
    case 42090:
    case 42091:
    case 42080:
    case 42081:
    case 42100:
    case 42101:
    case 42110:
    case 42111:
    case 42020:
    case 42021:
    case 42120:
    case 42121:
      return <FontAwesomeIcon icon={faCloudRain} className="text-blue-500" />;
    case 5000: // Snow
    case 5100: // Light Snow
    case 5001: // Flurries
    case 5101: // Heavy Snow
    case 50000:
    case 50001:
    case 51000:
    case 51001:
    case 50010:
    case 50011:
    case 51010:
    case 51011:
    case 51150:
    case 51151:
    case 51160:
    case 51161:
    case 51170:
    case 51171:
    case 51220:
    case 51221:
    case 51020:
    case 51021:
    case 51030:
    case 51031:
    case 51040:
    case 51041:
    case 51050:
    case 51051:
    case 51060:
    case 51061:
    case 51070:
    case 51071:
    case 51190:
    case 51191:
    case 51200:
    case 51201:
    case 51100:
    case 51080:
    case 51081:
      return <FontAwesomeIcon icon={faSnowflake} className="text-blue-500" />;
    case 3000: // Light Wind
    case 3001: // Wind
    case 3002: // Strong Wind
      return <FontAwesomeIcon icon={faWind} className="text-gray-500" />;
    case 6000: // Freezing Drizzle
    case 6200: // Light Freezing Rain
    case 6001: // Freezing Rain
      return <FontAwesomeIcon icon={faSnowflake} className="text-blue-500" />;
    case 8000: // Thunderstorm
      return <FontAwesomeIcon icon={faBolt} className="text-yellow-500" />;
    default:
      return null;
  }
};

const getWeatherDescription = (weatherCode) => {
  switch (weatherCode) {
    case 1000:
      return 'Clear, Sunny';
    case 1100:
    case 11001:
      return 'Mostly Clear';
    case 1101:
    case 11010:
    case 11011:
      return 'Partly Cloudy';
    case 1001:
      return 'Cloudy';
    case 1102:
    case 10010:
    case 10011:
      return 'Mostly Cloudy';
    case 2000:
      return 'Fog';
    case 2100:
      return 'Light Fog';
    case 2103:
    case 21030:
    case 21031:
      return 'Mostly Cloudy, Light Fog';
    case 2106:
    case 21060:
    case 21061:
      return 'Mostly Clear, Fog';
    case 2107:
    case 21070:
    case 21071:
      return 'Partly Cloudy, Fog';
    case 2108:
    case 21080:
    case 21081:
      return 'Mostly Cloudy, Fog';
    case 4000:
      return 'Drizzle';
    case 4200:
      return 'Light Rain';
    case 4001:
      return 'Rain';
    case 4201:
      return 'Heavy Rain';
    case 4203:
    case 42030:
    case 42031:
      return 'Mostly Clear, Drizzle';
    case 4204:
    case 42040:
    case 42041:
      return 'Partly Cloudy, Drizzle';
    case 4205:
    case 42050:
    case 42051:
      return 'Mostly Cloudy, Drizzle';
    case 4213:
    case 42130:
    case 42131:
      return 'Mostly Clear, Light Rain';
    case 4214:
    case 42140:
    case 42141:
      return 'Partly Cloudy, Light Rain';
    case 4215:
    case 42150:
    case 42151:
      return 'Mostly Cloudy, Light Rain';
    case 4209:
    case 42090:
    case 42091:
      return 'Mostly Clear, Rain';
    case 4208:
    case 42080:
    case 42081:
      return 'Partly Cloudy, Rain';
    case 4210:
    case 42100:
    case 42101:
      return 'Mostly Cloudy, Rain';
    case 4211:
    case 42110:
    case 42111:
      return 'Mostly Clear, Heavy Rain';
    case 4202:
    case 42020:
    case 42021:
      return 'Partly Cloudy, Heavy Rain';
    case 4212:
    case 42120:
    case 42121:
      return 'Mostly Cloudy, Heavy Rain';
    case 5001:
      return 'Flurries';
    case 5100:
      return 'Light Snow';
    case 5000:
      return 'Snow';
    case 5101:
      return 'Heavy Snow';
    case 5115:
    case 51150:
    case 51151:
      return 'Mostly Clear, Flurries';
    case 5116:
    case 51160:
    case 51161:
      return 'Partly Cloudy, Flurries';
    case 5117:
    case 51170:
    case 51171:
      return 'Mostly Cloudy, Flurries';
    case 5122:
    case 51220:
    case 51221:
      return 'Drizzle, Light Snow';
    case 5102:
    case 51020:
    case 51021:
      return 'Mostly Clear, Light Snow';
    case 5103:
    case 51030:
    case 51031:
      return 'Partly Cloudy, Light Snow';
    case 5104:
    case 51040:
    case 51041:
      return 'Mostly Cloudy, Light Snow';
    case 5105:
    case 51050:
    case 51051:
      return 'Mostly Clear, Snow';
    case 5106:
    case 51060:
    case 51061:
      return 'Partly Cloudy, Snow';
    case 5107:
    case 51070:
    case 51071:
      return 'Mostly Cloudy, Snow';
    case 5119:
    case 51190:
    case 51191:
      return 'Mostly Clear, Heavy Snow';
    case 5120:
    case 51200:
    case 51201:
      return 'Partly Cloudy, Heavy Snow';
    case 5110:
    case 51100:
    case 51101:
      return 'Drizzle, Snow';
    case 5108:
    case 51080:
    case 51081:
      return 'Rain, Snow';
    case 3000:
      return 'Light Wind';
    case 3001:
      return 'Wind';
    case 3002:
      return 'Strong Wind';
    case 6000:
      return 'Freezing Drizzle';
    case 6200:
      return 'Light Freezing Rain';
    case 6001:
      return 'Freezing Rain';
    case 8000:
      return 'Thunderstorm';
    default:
      return 'Unknown';
  }
};



const Weather = ({ city, currentTemperature, windSpeed, sunriseTime, sunsetTime,apparentTemperature, weatherIcon, weeklyWeather, weatherCode, currentWeather }) => {
  const celsiusToFahrenheit = (celsius) => {
    return Math.floor((celsius * 9/5) + 32); // Truncate Fahrenheit conversion
  };
    // Function to get day name for forecast
    const getDayName = (index) => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const today = new Date().getDay(); //Get the current day index
      const targetDayIndex = (today + index) % 7; //Calculate the index of the target day
      if (index === 0) {
          return 'Today'; 
      } else {
          return days[targetDayIndex]; 
      }
  };



  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{city} Weather</h1>
          <h2 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-4xl">Today</h2>

        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-4 mt-12">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Temperature</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {getWeatherIcon(weatherIcon)} {celsiusToFahrenheit(currentTemperature)}°F
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Wind Speed</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {windSpeed} mph
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Feels Like </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {celsiusToFahrenheit(apparentTemperature)}°F
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Weather</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {getWeatherDescription(weatherCode)}
            </dd>
          </div>


        </div>
        <div className="py-6 grid grid-cols-1 gap-x-4 gap-y-4 text-center sm:grid-cols-7 mt-12">
          {weeklyWeather.map((day, index) => (
            <div key={index} className="mx-auto flex w-full max-w-xs flex-col gap-y-4 border border-gray-300 p-4 rounded-lg">
                            <dt className="text-base leading-7 text-gray-600">{getDayName(index + 1)}</dt>

              <dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                {getWeatherIcon(day.weatherCode)} {celsiusToFahrenheit(day.temperature)}°F
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
