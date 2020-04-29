import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain,faCloudSun, faCloud,faSnowflake,faWind } from "@fortawesome/free-solid-svg-icons";
import {SUNNY, RAIN,CLOUD,SNOW,WIND} from "../../Constants/Weathers";
import "./WeatherTemp.scss";
import PropTypes from "prop-types";

const icons ={
  [SUNNY]:faCloudSun,
  [RAIN]:faCloudRain,
  [CLOUD]:faCloud,
  [SNOW]:faSnowflake,
  [WIND]:faWind
}

const getWeatherIcon = weatherState =>{
  const iconW =icons[weatherState] ? icons[weatherState]: faCloudRain;
  console.log(iconW);
  
  return<FontAwesomeIcon icon={iconW}/>
  
}




const WheaterTemp = ({temp,weatherState}) => (
  <div className="o-temp">
   {getWeatherIcon(weatherState)}
    <h2>{`${temp}°C`}</h2>
  </div>
);

WheaterTemp.propTypes={
  temp: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
}

export default WheaterTemp;
