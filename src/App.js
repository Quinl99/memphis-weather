import React from 'react';
import Weather from './components/weather.js';
import './index.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weeklyWeather, setWeeklyWeather] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = '6XwlFoBihlmF855lxP2Ed07mHQPwAk1M';
        const location = '35.149475,-90.048312';

        // Fetch real-time weather data
        const realtimeResponse = await fetch(
          `https://api.tomorrow.io/v4/weather/realtime?location=${location}&units=metric&apikey=${apiKey}`
        );
        const realtimeData = await realtimeResponse.json();
        const currentValues = realtimeData.data.values;

        // Convert sunrise and sunset times to a readable format
        const formatTime = (isoString) => {
          return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        };

        setCurrentWeather({
          temperature: Math.floor(currentValues.temperature), // Truncate temperature
          windSpeed: (currentValues.windSpeed * 2.237).toFixed(0), // Convert wind speed to mph and truncate
          apparentTemperature: Math.floor(currentValues.temperatureApparent), // Truncate apparent temperature

          weatherCode: currentValues.weatherCode,
        });

        // Fetch 7-day weather forecast
        const forecastResponse = await fetch(
          `https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperature,weatherCode&units=metric&timesteps=1d&apikey=${apiKey}`
        );
        if (!forecastResponse.ok) {
          if (forecastResponse.status === 429) {
            throw new Error("Rate limit exceeded. Please try again later.");
          } else {
            throw new Error("Failed to fetch weather data.");
          }
        }
        const forecastData = await forecastResponse.json();

        if (forecastData && forecastData.data && forecastData.data.timelines) {
          const intervals = forecastData.data.timelines[0].intervals;
          setWeeklyWeather(intervals.map(interval => ({
            temperature: Math.floor(interval.values.temperature), // Truncate temperature
            weatherCode: interval.values.weatherCode
          })));
        } else {
          throw new Error("Invalid API response structure.");
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchWeatherData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!currentWeather || weeklyWeather.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Weather
      city="Memphis"
      currentTemperature={currentWeather.temperature}
      windSpeed={currentWeather.windSpeed}
      apparentTemperature={currentWeather.apparentTemperature}
   //   weatherIcon={currentWeather.weatherCode}
   weatherCode={currentWeather.weatherCode}

      weeklyWeather={weeklyWeather}
    />
  );
};

export default App;
