import React from 'react';
import Forecast from './Forecast'
import Highlights from './Highlights'

export default function Main(props) {
    return (
        <div className="main__wrapper flex-col">
            <div className="toggle__type flex-row">
                <button id="celsius" className="toggle__btn toggle__celsius selected" onClick={() => props.setTempFormat("celsius", "celsius")}>ºC</button>
                <button id="fahrenheit" className="toggle__btn toggle__fahrenheit" onClick={() => props.setTempFormat("fahrenheit", "fahrenheit")}>ºF</button>
            </div>
        
        <Forecast 
        forecast={props.weatherData}
        theme={props.theme}
        tempFormat={props.tempFormat}
        />
        <Highlights 
        weatherDetails={props.weatherData[0]}/>
        </div>
    )
}