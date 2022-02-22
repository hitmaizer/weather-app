import React from 'react';
import WindStatus from '../elements/WindStatus'
import Humidity from '../elements/Humidity'
import Visibility from '../elements/Visibility'
import AirPressure from '../elements/AirPressure'

export default function Highlights(props) {
    return  (
        <div className="highlights__wrapper flex-col">
            <h1 className="highlights__title">Today's Highlights</h1>
            <div className="highlights__grid">
                <WindStatus weatherDetails={props.weatherDetails} />
                <Humidity weatherDetails={props.weatherDetails} />
                <Visibility weatherDetails={props.weatherDetails} />
                <AirPressure weatherDetails={props.weatherDetails} />
            </div>

        </div>
    )
}