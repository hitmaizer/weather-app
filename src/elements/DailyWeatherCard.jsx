import React from 'react';
import StyledCard from './StyledCard'

export default function DailyWeatherCard(props) {
    console.log(props.item)
    return (
        <StyledCard className="forecast__card flex-col">
            <p className="daily__date">{props.details.applicable_date}</p>
            <img src={props.weatherImg} alt="" className="daily__img" />
            <div className="daily__minmax flex-row">
                <p className="minmax max">{Math.floor(props.details.max_temp)}ºC</p>
                <p className="minmax min">{Math.floor(props.details.min_temp)}ºC</p>
            </div>
        </StyledCard>
    )
}