import React from 'react';
import StyledCard from './StyledCard'

export default function Humidity() {
    return (
        <StyledCard className="humidity__wrapper flex-col">
            <h5 className="humidity__title">Humidity</h5>
            <div className="humidity__maininfo flex-row">
                <h1 className="humidity__number">84</h1>
                <h5 className="humidity__type">%</h5>
            </div>
            <div className="humidity__progressbar flex-col">
                <div className="progressbar__numbers flex-row">
                    <p className="numbers__number">0</p>
                    <p className="numbers__number">50</p>
                    <p className="numbers__number">100</p>
                </div>
                <div className="progressbar__bar">

                </div>
                <p className="progressbar__type">%</p>
            </div>


        </StyledCard>
    )
}