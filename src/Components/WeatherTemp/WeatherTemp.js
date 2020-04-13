import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import "./WeatherTemp.css";
const WheaterTemp = () => (
  <div className="o-temp">
    <FontAwesomeIcon icon={faCloudSun} />
    <h2>31°C</h2>
  </div>
);

export default WheaterTemp;
