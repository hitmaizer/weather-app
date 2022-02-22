import React from 'react';
import StyledCard from './StyledCard'

export default function AirPressure(props) {
    return (
        <StyledCard className="airpressure__wrapper flex-col highlight__card">
            <h5 className="airpressure__title highlight__title">Air Pressure</h5>
            <div className="highlights__main flex-row">
                <h1 className="details__number highlight__detail">{props.weatherDetails.air_pressure}</h1>
                <h3 className="details__type highlight__type">mb</h3>
            </div>

        </StyledCard>
    )
}