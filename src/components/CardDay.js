import React from 'react'
import './CardDayStyle.css'

export const CardDay = ({area='day', date='Abril 11, 2021', icon='https://www.flaticon.com/svg/vstatic/svg/2698/2698213.svg?token=exp=1618177099~hmac=c08220636d79ce8305606343abef6eb9', temperature='30°'}) => {
  return (
    <div className='day' style={{gridArea: `${area}`}}>
      <p>{date}</p>
      <h2>{temperature}</h2>
      <img src={icon}/>
    </div>
  )
}
