import React from 'react';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'


export default function DrawerContent() {
    return (
        <div className="drawer__wrapper">
            <div className="search__container flex-row">
                <input type="text" className="search__input" placeholder="search location" />
                <button className="search__btn">Search</button>
            </div>
            <div className="search__results flex-col">
                <div className="result__item flex-row">
                    <p className="result__text">London</p>
                    <ArrowIosForwardOutline size="8px" />
                </div>
                <div className="result__item flex-row">
                    <p className="result__text">London</p>
                    <ArrowIosForwardOutline size="8px" />
                </div>
                <div className="result__item flex-row">
                    <p className="result__text">London</p>
                    <ArrowIosForwardOutline size="8px" />
                </div>

            </div>
        </div>
    )
}