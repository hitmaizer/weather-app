import React from 'react';
import StyledCard from './StyledCard'

export default function Visibility() {
    return (
        <StyledCard className="visibility__wrapper flex-col">
            <h5 className="visibility__title">Visibility</h5>
            <div className="visibility__details flex-row">
                <h1 className="details__number">6,4</h1>
                <h3 className="details__type">miles</h3>
            </div>

        </StyledCard>
    )
}