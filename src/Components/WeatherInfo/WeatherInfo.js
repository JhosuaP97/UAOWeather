import React from "react";
import WheaterTemp from "../WeatherTemp/WeatherTemp";
import WeatherExtra from "../WeatherExtra/WeatherExtra";
import "./WeatherInfo.css";
const WeatherInfo = () => {
  return (
    <div className="o-info">
      <div className="o-container-temp">
        <WheaterTemp />
      </div>

      <WeatherExtra humidity="15" wind="3 m/s"/>
    </div>
  );
};

export default WeatherInfo;
