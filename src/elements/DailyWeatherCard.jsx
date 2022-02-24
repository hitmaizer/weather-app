import React from 'react';
import StyledCard from './StyledCard'

export default function DailyWeatherCard(props) {
    
    return (
        <StyledCard className="forecast__card flex-col">
            <p className="daily__date">{props.date}</p>
            <div className="img__container flex-col">
                <img src={props.details.day.condition.icon} alt="" className="daily__img" />
            </div>
            <div className="daily__minmax flex-row">
                <p className="minmax max">{props.tempFormat === 0 ? Math.floor(props.details.day.maxtemp_c): Math.floor(props.details.day.maxtemp_f)}{props.tempFormat === 0 ? "ºC" : "ºF"}</p>
                <p className="minmax min">{props.tempFormat === 0 ? Math.floor(props.details.day.mintemp_c): Math.floor(props.details.day.mintemp_f)}{props.tempFormat === 0 ? "ºC" : "ºF"}</p>
            </div>
        </StyledCard>
    )
}