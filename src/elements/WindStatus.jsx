import React from 'react';
import StyledCard from './StyledCard'
import { DiagonalArrowLeftDown, DiagonalArrowLeftUp, DiagonalArrowRightDown, DiagonalArrowRightUp, ArrowUpward, ArrowDownward, ArrowBack, ArrowForward } from 'styled-icons/evaicons-solid';

export default function WindStatus(props) {
    

    return (
        <StyledCard className="wind__wrapper flex-col highlight__card">
            <h5 className="wind__title highlight__title">Wind Status</h5>
            <div className="highlights__main flex-row">
                <h1 className="wind__number highlight__detail">{Math.floor(props.weatherDetails.wind_kph)}</h1>
                <h5 className="wind__type highlight__type">Km/h</h5>
            </div>
            <div className="wind__direction flex-row">
                {props.weatherDetails.wind_dir === "N" && <ArrowUpward size="24px" />}
                {props.weatherDetails.wind_dir === "NNE" && <DiagonalArrowRightUp size="24px" />}
                {props.weatherDetails.wind_dir === "NE" && <DiagonalArrowRightUp size="24px" />}
                {props.weatherDetails.wind_dir === "ENE" && <DiagonalArrowRightUp size="24px" />}
                {props.weatherDetails.wind_dir === "E" && <ArrowForward size="24px" />}
                {props.weatherDetails.wind_dir === "ESE" && <DiagonalArrowRightDown size="24px" />}
                {props.weatherDetails.wind_dir === "SE" && <DiagonalArrowRightDown size="24px" />}
                {props.weatherDetails.wind_dir === "SSE" && <DiagonalArrowRightDown size="24px" />}
                {props.weatherDetails.wind_dir === "S" && <ArrowDownward size="24px" />}
                {props.weatherDetails.wind_dir === "SSW" && <DiagonalArrowLeftDown size="24px" />}
                {props.weatherDetails.wind_dir === "SW" && <DiagonalArrowLeftDown size="24px" />}
                {props.weatherDetails.wind_dir === "WSW" && <DiagonalArrowLeftDown size="24px" />}
                {props.weatherDetails.wind_dir === "W" && <ArrowBack size="24px" />}
                {props.weatherDetails.wind_dir === "WNW" && <DiagonalArrowLeftUp size="24px" />} 
                {props.weatherDetails.wind_dir === "NW" && <DiagonalArrowLeftUp size="24px" />} 
                {props.weatherDetails.wind_dir === "NNW" && <DiagonalArrowLeftUp size="24px" />} 
                <h5 className="direction__text">{props.weatherDetails.wind_dir}</h5>
            </div>

        </StyledCard>
    )
}