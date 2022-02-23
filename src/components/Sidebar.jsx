import React from 'react';
import { MyLocation } from '@styled-icons/fluentui-system-filled/MyLocation'
import { LocationPin } from '@styled-icons/entypo/LocationPin'



export default function Sidebar(props) {
    let today = new Date()

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Out", "Nov", "Dec"]
    const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const day = weekDay[today.getDay()]
    const month = months[today.getMonth()]
    today = day + ", " + today.getDate() + " " + month
    
    
    return (
        <div className="sidebar__wrapper flex-col">
            <div className="sidebar__top flex-row">
                <button className="top__searchplaces sidebar__btn" onClick={props.toggleDrawer(true)}>
                    <span className="search__text">Search for places</span>
                </button>
                <button className="top__mylocation sidebar__btn" onClick={props.currentPosition}>
                    <span className="mylocation__icon">
                        <MyLocation size="24px" />
                    </span>
                </button>
            </div>
        <img src="images/Shower.png" alt="" className="sidebar__weatherimg" />
        <h1 className="sidebar__weathernumber">{Math.floor(props.weatherData[0].the_temp)}<span className="weathernumber--type">ºC</span></h1>
        <h3 className="sidebar__weathertype">{props.weatherData[0].weather_state_name}</h3>
        <div className="sidebar__details--container flex-col">
            <div className="sidebar__details flex-row">
                <p className="details__day">Today</p>
                <span>•</span>
                <p>{today}</p>
            </div>
            <div className="sidebar__location flex-row">
                <LocationPin size="24px" />
                <p className="location__name">{props.currentLocation.title}</p>
            </div>
        </div>
        </div>
    )
}