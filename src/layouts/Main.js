import React, { useEffect, useState } from 'react'
import api from '../common/api'
import { params } from '../common/apiInfo'
import { CardDay } from '../components/CardDay'
import { CardFrance } from '../components/CardFrance'
import { CardMain } from '../components/CardMain'
import { capitalize } from '../Utilities/capitalize'
import { getCountry } from '../Utilities/getCountry'
import { getIcon } from '../Utilities/getIcon'
import { getNumberRound } from '../Utilities/getNumberRound'
import { getPronostic } from '../Utilities/getPronosthic'
import { getTheme } from '../Utilities/theme'
import './MainStyle.css'

export const Main = () => {
  const [info, setInfo] = useState({});
  const [infoFrance, setInfoFrance] = useState({});
  const [infoPronosthic, setInfoPronosthic] = useState({});

  useEffect(() => {
     api.get('/data/2.5/weather', params).then(res => setInfo(res))
     api.get('/data/2.5/weather', {...params, q:'Paris'}).then(res => setInfoFrance(res))
     api.get('/data/2.5/forecast', params).then(res => setInfoPronosthic(res))
  }, [])

  const pronosthic = getPronostic(infoPronosthic)

  return (
    <div className={getTheme('main', getNumberRound(info.payload?.main.temp) || '0')}>
    <div className='layer'>
      <div className='layer__container'>
        <CardMain 
          icon={getIcon(info.payload?.main.temp)}
          temperature={getNumberRound(info.payload?.main.temp) || '0'}
          city={info.payload?.name}
          country={getCountry(info.payload?.sys.country)}
          description={info.payload?.weather[0]["description"]}
          />
        <CardFrance 
          icon={getIcon(infoFrance.payload?.main.temp)}
          temperature={getNumberRound(infoFrance.payload?.main.temp) || '0'}
          city={infoFrance.payload?.name}
          country={getCountry(infoFrance.payload?.sys.country)}
          theme={getNumberRound(info.payload?.main.temp)}
        />
        <CardDay area='day1' temperature={getNumberRound(pronosthic.day1.temperature) || '0'} description={capitalize(pronosthic.day1?.description)} icon={getIcon(pronosthic.day1?.temperature)} date={pronosthic.day1?.date} theme={getNumberRound(info.payload?.main.temp)}/>
        <CardDay area='day2' temperature={getNumberRound(pronosthic.day2.temperature) || '0'} description={capitalize(pronosthic.day2?.description)} icon={getIcon(pronosthic.day2?.temperature)} date={pronosthic.day2?.date} theme={getNumberRound(info.payload?.main.temp)}/>
        <CardDay area='day3' temperature={getNumberRound(pronosthic.day3.temperature) || '0'} description={capitalize(pronosthic.day3?.description)} icon={getIcon(pronosthic.day3?.temperature)} date={pronosthic.day3?.date} theme={getNumberRound(info.payload?.main.temp)}/>
      </div>
    </div>
    </div>
  )
}
