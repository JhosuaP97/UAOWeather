import React,{Component} from "react";
import Title from "../Title/Title";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import "./WeatherCity.scss";

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

    constructor(){
        super();
        this.state={
            name:"El Cerrito",
            data:data
        }

       /*  this.handleClick=this.handleClick.bind(this); */
    }

    handleClick=()=>{
        console.log("Actualizar");
        this.setState({
            data:data2
        })
    }
    render(){
        const {name,data}=this.state;
        return (
            <div className="o-card">
              <Title city={name}></Title>
              <WeatherInfo data={data} />
              <button onClick={this.handleClick}>Actualizar</button>
            </div>
          );
    }
  
};

export default WeatherCity;
