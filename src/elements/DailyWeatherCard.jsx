import React from 'react';
import StyledCard from './StyledCard'

export default function DailyWeatherCard(props) {
    
    return (
        <StyledCard className="forecast__card flex-col">
            <p className="daily__date">{props.details.applicable_date}</p>
            <div className="img__container flex-col">
                <img src={props.weatherImg} alt="" className="daily__img" />
            </div>
            <div className="daily__minmax flex-row">
                <p className="minmax max">{Math.floor(props.details.max_temp)}{props.tempFormat === "celsius" ? "ºC" : "ºF"}</p>
                <p className="minmax min">{Math.floor(props.details.min_temp)}{props.tempFormat === "celsius" ? "ºC" : "ºF"}</p>
            </div>
        </StyledCard>
    )
}