import React from "react";
import "./Title.css";

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
