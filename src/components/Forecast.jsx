import React from 'react';
import DailyWeatherCard from '../elements/DailyWeatherCard'
import { nanoid } from 'nanoid'

export default function Forecast(props) {

    const forecastElements = props.forecast.map(item => 
        <DailyWeatherCard 
        key={nanoid()}
        details={item}/>)

    return (
        <div className="forecast__wrapper">
            {forecastElements}
        </div>
    )
}