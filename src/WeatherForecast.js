import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "349d90e7a285f14e8d2236c5925edbde";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <span>
        <hr />
        <div className="row weather-forecast">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-2 day-column" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </span>
    );
  } else {
    load();

    return null;
  }
}