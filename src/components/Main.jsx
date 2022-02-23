import React from 'react';
import Forecast from './Forecast'
import Highlights from './Highlights'

export default function Main(props) {
    return (
        <div className="main__wrapper flex-col">
            <div className="toggle__type flex-row">
                <button className="toggle__btn toggle__celsius">ºC</button>
                <button className="toggle__btn toggle__fahrenheit">ºF</button>
            </div>
        
        <Forecast 
        forecast={props.weatherData}
        theme={props.theme}
        />
        <Highlights 
        weatherDetails={props.weatherData[0]}/>
        </div>
    )
}