import React from 'react';
import { MyLocation } from '@styled-icons/fluentui-system-filled/MyLocation'
import { LocationPin } from '@styled-icons/entypo/LocationPin'

export default function Sidebar() {
    return (
        <div className="sidebar__wrapper flex-col">
            <div className="sidebar__top flex-row">
                <button className="top__searchplaces">
                    <span className="search__text">Search for places</span>
                </button>
                <button className="top__mylocation">
                    <span className="mylocation__icon">
                        <MyLocation size="24px" />
                    </span>
                </button>
            </div>
        <img src="images/Shower.png" alt="" className="sidebar__weatherimg" />
        <h1 className="sidebar__weathernumber">15 <span className="weathernumber--type">ºC</span></h1>
        <h3 className="sidebar__weathertype">Shower</h3>
        <div className="sidebar__details flex-row">
            <p className="details__day">Today</p>
            <span>•</span>
            <p className="details__date">Fri, 5 Jun</p>
        </div>
        <div className="sidebar__location flex-row">
            <LocationPin size="24px" />
            <p className="location__name">Helsinki</p>
        </div>
        </div>
    )
}