import React from 'react';
import StyledCard from './StyledCard'

export default function Visibility() {
    return (
        <StyledCard className="visibility__wrapper flex-col highlight__card">
            <h5 className="visibility__title highlight__title">Visibility</h5>
            <div className="highlights__main flex-row">
                <h1 className="details__number highlight__detail">6,4</h1>
                <h3 className="details__type highlight__type">miles</h3>
            </div>

        </StyledCard>
    )
}