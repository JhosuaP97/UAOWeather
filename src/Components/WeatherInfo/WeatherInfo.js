import React from "react";
import WheaterTemp from "../WeatherTemp/WeatherTemp";
import WeatherExtra from "../WeatherExtra/WeatherExtra";
import {SUNNY, RAIN,CLOUD,SNOW,WIND} from "../../Constants/Weathers";
import "./WeatherInfo.scss";

const WeatherInfo = ({data:{temp,state,humidity,wind}}) => {
  
  return (
    <div className="o-info">
      <div className="o-container-temp">
        <WheaterTemp temp={temp} weatherState={state} />
      </div>

      <WeatherExtra humidity={humidity} wind={wind}/>
    </div>
  );
};

export default WeatherInfo;
