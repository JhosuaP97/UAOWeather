import React from 'react'
import "./WeatherExtra.scss";


/**
 * 
 * @param {Text} humidity 
 * @param {Text} wind
 */

const WeatherExtra = ({humidity,wind}) =>(
    <div className="o-extra">
    <h5>Información adicional</h5>
        <h5>{`${humidity}% h m`}</h5>
        <h5>{`${wind} wind`}</h5>
    </div>
);

export default WeatherExtra;