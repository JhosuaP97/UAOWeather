import React from 'react'
import Title from '../Title/Title';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import "./WeatherCity.css"
const WeatherCity = ()=>(
    <div className="o-card">
        <Title city={"Santiago de Cali"}></Title>
        <WeatherInfo/>
    </div>
);

export default WeatherCity;