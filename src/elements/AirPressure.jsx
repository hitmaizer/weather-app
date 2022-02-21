import React from 'react';
import StyledCard from './StyledCard'

export default function AirPressure() {
    return (
        <StyledCard className="airpressure__wrapper flex-col">
            <h5 className="airpressure__title">Air Pressure</h5>
            <div className="airpressure__details flex-row">
                <h1 className="details__number">998</h1>
                <h3 className="details__type">mb</h3>
            </div>

        </StyledCard>
    )
}