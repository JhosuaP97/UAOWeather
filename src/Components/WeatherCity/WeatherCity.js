import React, {Component} from "react";
import Title from "../Title/Title";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import cardStyle from "./WeatherCity.module.scss";
import { SUNNY } from "../../Constants/Weathers";
/* import {WEATHER_KEY} from '../../key' */
import convert from "convert-units";

const location = "Cali,co";
const api_key = "";
const endPoint = "";
const api_weather = `${endPoint}?q=${location}&appid=${api_key}`;

const data = {
  temp: 20,
  state: "CLOUD",
  humidity: 10,
  wind: 9,
};

const data2 = {
  temp: 42,
  state: "SUNNY",
  humidity: 20,
  wind: 5,
};

class WeatherCity extends Component {
  constructor() {
    super();
    this.state = {
      name: "El Cerrito",
      data: data,
    };

    /*  this.handleClick=this.handleClick.bind(this); */
  }

  getTemp(tempKelvin){
    return Number(convert(tempKelvin).from('K').to('C').toFixed(2));
  }

  getWeatherState(responseData){
    return SUNNY;
  }

  getInfoCity(responseData){
    console.log(responseData);
    
    const {humidity, temp} = responseData.main;
    const {speed}= responseData.wind;
    const weatherStateTemp = this.getWeatherState(responseData);

    const responseInfoCity ={
      humidity,
      temp:this.getTemp(temp),
      state: weatherStateTemp,
      wind :speed
    }
    
    return responseInfoCity;
  }

  handleClick = () => {
    let me = this;
    fetch(api_weather).then((resolve)=>{
        return resolve.json();
      }).then(function(myJson){        
        me.setState({
          data:me.getInfoCity(myJson)
        })
      });
  };
  render() {
    const {name, data} = this.state;
    return (
      <div className={cardStyle.o_card}>
        <Title city={name}></Title>
        <WeatherInfo data={data} />
        <button onClick={this.handleClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherCity;
