import React from 'react'
import { CardDay } from '../components/CardDay'
import { CardFrance } from '../components/CardFrance'
import { CardMain } from '../components/CardMain'
import './MainStyle.css'

export const Main = () => {
  return (
    <div className='layer'>
      <div className='layer__container'>
        <CardMain/>
        <CardFrance/>
        <CardDay area='day1'/>
        <CardDay area='day2'/>
        <CardDay area='day3'/>
      </div>
    </div>
  )
}
