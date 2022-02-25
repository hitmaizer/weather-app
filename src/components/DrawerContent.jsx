import React from 'react';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline'
import { NavigationOutlineDimensions } from '@styled-icons/evaicons-outline/NavigationOutline';
import { nanoid } from 'nanoid'

export default function DrawerContent(props) {
    return (
        <div className="drawer__wrapper">
            <div className="search__container flex-row">
                <input type="text" className="search__input" placeholder="search location" onChange={(event) => props.handleFilter(event)}/>
                <SearchOutline size="24px" className="search__icon"/>
                <button className="search__btn">Search</button>
            </div>
            {props.filteredData !== [] && 
                <div className="search__results">
                    {props.filteredData.map((item) => {
                        return <div key={nanoid()} className="result__item">
                                <p className="result__text" onClick={(string) => props.searchTypedLocation(item.name)}>{item.name}, {item.region}</p> 
                            </div>
                        
                        
                    })}
                </div>
            }
            <div className="search__results flex-col">
                <h1 className="result__title highlights__title">Popular Cities</h1>
                <div className="result__item flex-row" onClick={(string) => props.handlePopularCities("london")}>
                    <p className="result__text">London</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>
                <div className="result__item flex-row" onClick={(string) => props.handlePopularCities("berlin")}>
                    <p className="result__text">Berlin</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>
                <div className="result__item flex-row" onClick={(string) => props.handlePopularCities("paris")}>
                    <p className="result__text">Paris</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>
                <div className="result__item flex-row" onClick={(string) => props.handlePopularCities("madrid")}>
                    <p className="result__text">Madrid</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>
                <div className="result__item flex-row" onClick={(string) => props.handlePopularCities("stockholm")}>
                    <p className="result__text">Stockholm</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>
                <div className="result__item flex-row" onClick={(string) => props.handlePopularCities("helsinki")}>
                    <p className="result__text">Helsinki</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>
                <div className="result__item flex-row" onClick={(string) => props.handlePopularCities("moscow")}>
                    <p className="result__text">Moscow</p>
                    <ArrowIosForwardOutline size="24px" className="result__icon" />
                </div>

            </div>
        </div>
    )
}