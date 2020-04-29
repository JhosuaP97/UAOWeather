import React from "react";
import "./Title.scss";
/** 
 * @param {*} props
 * city = Texto a asignar al titulo de la ciudad
*/


const Title = props => {
  console.log("Parametros", props);
  const {city} =props;
  return (
    <div>
      <h2>{city}</h2>
    </div>
  );
};

export default Title;
