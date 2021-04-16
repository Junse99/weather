import React from "react";
import { capitalize } from "../Utilities/capitalize";
import { getTheme } from "../Utilities/theme";
import "./CardMainStyle.css";

export const CardMain = ({temperature, city, description='Clima', country, icon=''}) => {

  return (
    <div className={`container__main ${getTheme('cardMain', temperature)}`}>
      <div className='container__main--temperature'>
        <p className="gradeNumber">{temperature}°</p>
        <img src={icon}/>
      </div>
      <p className='container__main--city'>{city},</p>
      <p className='container__main--country'>{country}</p>
      <strong>{capitalize(description)}</strong>
      <p className='container__main--date'>{new Date(Date.now()).toDateString()}</p>
    </div>
  );
};
