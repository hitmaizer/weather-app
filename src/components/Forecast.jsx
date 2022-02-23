import React from 'react';
import DailyWeatherCard from '../elements/DailyWeatherCard'
import { nanoid } from 'nanoid'

export default function Forecast(props) {

    const forecastElements = props.forecast.slice(1).map(item => {
        let weatherImg = ""
        switch(item.weather_state_abbr){
                default:
                break
                case "sn":
                    weatherImg = props.theme.images.snow
                break
                case "sl":
                    weatherImg = props.theme.images.sleet
                break
                case "h":
                    weatherImg = props.theme.images.hail
                break
                case "t": 
                    weatherImg = props.theme.images.thunderStorm
                break
                case "hr":
                    weatherImg = props.theme.images.heavyRain
                break
                case "lr":
                    weatherImg = props.theme.images.lightRain
                break
                case "s":
                    weatherImg = props.theme.images.shower
                break
                case "hc":
                    weatherImg = props.theme.images.heavyCloud
                break
                case "lc":
                    weatherImg = props.theme.images.lightCloud
                break
                case "c": 
                    weatherImg = props.theme.images.clear
                break            
        }
        return (
            <DailyWeatherCard 
            key={nanoid()}
            details={item}
            weatherImg={weatherImg}
            tempFormat={props.tempFormat}
            />
            
        )
    })

    return (
        <div className="forecast__wrapper">
            {forecastElements}
        </div>
    )
}