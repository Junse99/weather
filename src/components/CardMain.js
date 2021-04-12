import React from "react";
import "./CardMainStyle.css";

export const CardMain = ({icon='https://www.flaticon.com/svg/vstatic/svg/2698/2698213.svg?token=exp=1618177099~hmac=c08220636d79ce8305606343abef6eb9'}) => {
  return (
    <div className="container__main">
      <div className='container__main--temperature'>
        <p className="gradeNumber">27°</p>
        <img src={icon}/>
      </div>
      <p className='container__main--city'>Bogotá,</p>
      <p className='container__main--country'>Colombia</p>
      <p className='container__main--date'>Abril 10, 2021</p>
    </div>
  );
};
