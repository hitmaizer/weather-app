import React from 'react';
import StyledCard from './StyledCard'
import { DiagonalArrowLeftDown } from 'styled-icons/evaicons-solid';

export default function WindStatus() {
    return (
        <StyledCard className="wind__wrapper flex-col">
            <h5 className="wind__title">Wind Status</h5>
            <div className="wind__maininfo flex-row">
                <h1 className="wind__number">7</h1>
                <h5 className="wind__type">mph</h5>
            </div>
            <div className="wind__direction">
                <DiagonalArrowLeftDown size="24px" />
                <h5 className="direction__text">WSW</h5>
            </div>

        </StyledCard>
    )
}