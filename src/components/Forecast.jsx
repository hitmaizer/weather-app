import React from 'react';
import DailyWeatherCard from '../elements/DailyWeatherCard'
import { nanoid } from 'nanoid'
import moment from 'moment';

export default function Forecast(props) {
    let forecastData = [props.forecast.forecastday]
    


    const forecastElements = forecastData[0].map(item => {
        let m = moment(item.date)
        
        return (
            <DailyWeatherCard 
            key={nanoid()}
            details={item}
            tempFormat={props.tempFormat}
            date={m.format("dddd")}
            />
            
        )
    })

    return (
        <div className="forecast__wrapper">
            {forecastElements}
        </div>
    )
}