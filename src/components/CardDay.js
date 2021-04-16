import React from 'react'
import { getTheme } from '../Utilities/theme'
import './CardDayStyle.css'

export const CardDay = ({
  area='day', 
  description, 
  temperature='30°', 
  date='Abril 11, 2021', 
  icon='https://www.flaticon.com/svg/vstatic/svg/2698/2698213.svg?token=exp=1618177099~hmac=c08220636d79ce8305606343abef6eb9', 
  theme
}) => {
  return (
    <div className={`day ${getTheme('cardDay', theme)}`} style={{gridArea: `${area}`}}>
      <b>{date}</b>
      <small>{description}</small>
      <h2>{temperature}°</h2>
      <img src={icon}/>
    </div>
  )
}
