import React from "react";
import "./CardFranceStyle.css";

export const CardFrance = ({
  name = "Francia",
  capital = "Paris",
  temperature = "30°",
  icon = "https://www.flaticon.com/svg/vstatic/svg/2698/2698213.svg?token=exp=1618177099~hmac=c08220636d79ce8305606343abef6eb9",
}) => {
  return (
    <div className="containerFrance">
      <div className="containerFrance__information">
        <div className="information__city">
          <h2>{name}</h2>
          <p>{capital}</p>
        </div>
        <img
          className="containerFrance__imgRound"
          src="https://cdn.culturagenial.com/es/imagenes/torre-eiffel-cke.jpg"
        />
      </div>
      <div className="containerFrance__temperature">
        <p className="temperature__number">{temperature}</p>
        <img src={icon} />
      </div>
      <p className="containerFrance__text">
        Nuestros colaboradores en Francia están a esta temperatura
      </p>
    </div>
  );
};
