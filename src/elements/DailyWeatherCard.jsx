import React from 'react';
import StyledCard from './StyledCard'

export default function DailyWeatherCard() {
    return (
        <StyledCard className="forecast__card flex-col">
            <p className="daily__date">Tomorrow</p>
            <img src="images/HeavyRain.png" alt="" className="daily__img" />
            <div className="daily__minmax flex-row">
                <p className="minmax max">16ºC</p>
                <p className="minmax min">11ºC</p>
            </div>
        </StyledCard>
    )
}