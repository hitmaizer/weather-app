import React from 'react';
import DailyWeatherCard from '../elements/DailyWeatherCard'

export default function Forecast() {
    return (
        <div className="forecast__wrapper">
            <DailyWeatherCard />
            <DailyWeatherCard />
            <DailyWeatherCard />
            <DailyWeatherCard />
            <DailyWeatherCard />
        </div>
    )
}