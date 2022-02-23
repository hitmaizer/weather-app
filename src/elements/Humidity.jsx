import React from 'react';
import StyledCard from './StyledCard'
import styled from 'styled-components';


const ProgressBar = styled.div`
background-color: ${(props) => props.theme.colors.yellow};
width: ${(props) => props.progress}%;
height: 8px;
border-radius: 80px;
`;


export default function Humidity(props) {
    



    return (
        <StyledCard className="humidity__wrapper flex-col highlight__card">
            <h5 className="humidity__title highlight__title">Humidity</h5>
            <div className="highlights__main flex-row">
                <h1 className="humidity__number highlight__detail">{props.weatherDetails.humidity}</h1>
                <h5 className="humidity__type highlight__type">%</h5>
            </div>
            <div className="humidity__progressbar flex-col">
                <div className="progressbar__numbers flex-row">
                    <p className="numbers__number">0</p>
                    <p className="numbers__number">50</p>
                    <p className="numbers__number">100</p>
                </div>
                <div className="progress__container">
                    <ProgressBar progress={props.weatherDetails.humidity}/>
                </div>
                <p className="progressbar__type">%</p>
            </div>


        </StyledCard>
    )
}