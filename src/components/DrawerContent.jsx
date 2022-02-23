import React from 'react';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline'

export default function DrawerContent() {
    return (
        <div className="drawer__wrapper">
            <div className="search__container flex-row">
                <input type="text" className="search__input" placeholder="search location" />
                <SearchOutline size="24px" className="search__icon"/>
                <button className="search__btn">Search</button>
            </div>
            <div className="search__results flex-col">
                <h1 className="result__title highlights__title">Popular Cities</h1>
                <div className="result__item flex-row">
                    <p className="result__text">London</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>
                <div className="result__item flex-row">
                    <p className="result__text">Berlin</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>
                <div className="result__item flex-row">
                    <p className="result__text">Paris</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>
                <div className="result__item flex-row">
                    <p className="result__text">Madrid</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>
                <div className="result__item flex-row">
                    <p className="result__text">Stockholm</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>
                <div className="result__item flex-row">
                    <p className="result__text">Helsinki</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>
                <div className="result__item flex-row">
                    <p className="result__text">Moscow</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>

            </div>
        </div>
    )
}