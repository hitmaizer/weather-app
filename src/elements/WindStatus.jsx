import React from 'react';
import StyledCard from './StyledCard'
import { DiagonalArrowLeftDown, DiagonalArrowLeftUp, DiagonalArrowRightDown, DiagonalArrowRightUp, ArrowUpward, ArrowDownward, ArrowBack, ArrowForward } from 'styled-icons/evaicons-solid';

export default function WindStatus(props) {
    

    return (
        <StyledCard className="wind__wrapper flex-col highlight__card">
            <h5 className="wind__title highlight__title">Wind Status</h5>
            <div className="highlights__main flex-row">
                <h1 className="wind__number highlight__detail">{Math.floor(props.weatherDetails.wind_speed)}</h1>
                <h5 className="wind__type highlight__type">mph</h5>
            </div>
            <div className="wind__direction flex-row">
                {props.weatherDetails.wind_direction_compass === "N" && <ArrowUpward size="24px" />}
                {props.weatherDetails.wind_direction_compass === "NNE" && <DiagonalArrowRightUp size="24px" />}
                {props.weatherDetails.wind_direction_compass === "NE" && <DiagonalArrowRightUp size="24px" />}
                {props.weatherDetails.wind_direction_compass === "ENE" && <DiagonalArrowRightUp size="24px" />}
                {props.weatherDetails.wind_direction_compass === "E" && <ArrowForward size="24px" />}
                {props.weatherDetails.wind_direction_compass === "ESE" && <DiagonalArrowRightDown size="24px" />}
                {props.weatherDetails.wind_direction_compass === "SE" && <DiagonalArrowRightDown size="24px" />}
                {props.weatherDetails.wind_direction_compass === "SSE" && <DiagonalArrowRightDown size="24px" />}
                {props.weatherDetails.wind_direction_compass === "S" && <ArrowDownward size="24px" />}
                {props.weatherDetails.wind_direction_compass === "SSW" && <DiagonalArrowLeftDown size="24px" />}
                {props.weatherDetails.wind_direction_compass === "SW" && <DiagonalArrowLeftDown size="24px" />}
                {props.weatherDetails.wind_direction_compass === "WSW" && <DiagonalArrowLeftDown size="24px" />}
                {props.weatherDetails.wind_direction_compass === "W" && <ArrowBack size="24px" />}
                {props.weatherDetails.wind_direction_compass === "WNW" && <DiagonalArrowLeftUp size="24px" />} 
                {props.weatherDetails.wind_direction_compass === "NW" && <DiagonalArrowLeftUp size="24px" />} 
                {props.weatherDetails.wind_direction_compass === "NNW" && <DiagonalArrowLeftUp size="24px" />} 
                <h5 className="direction__text">{props.weatherDetails.wind_direction_compass}</h5>
            </div>

        </StyledCard>
    )
}