import React from 'react';
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline'
import { LocationPin } from '@styled-icons/entypo/LocationPin';
import { nanoid } from 'nanoid'
import PopularCities from '../elements/PopularCities'
import { Close } from '@styled-icons/evaicons-solid/Close'

export default function DrawerContent(props) {
    return (
        <div className="drawer__wrapper">
            <div className="search__container flex-row">
                <input type="text" className="search__input" placeholder="search location" onChange={(event) => props.handleFilter(event)}/>
                <SearchOutline size="24px" className="search__icon"/>
                <Close size="24px" />
            </div>
            {props.filteredData !== [] && 
                <div className="search__results">
                    {props.filteredData.map((item) => {
                        return <div key={nanoid()} className="result__item flex-row">
                                <LocationPin size="24px" className="result__icon icon--location"/>
                                <p className="result__textinput" onClick={(string) => props.searchTypedLocation(item.name)}>{item.name}, {item.region}</p> 
                            </div>                        
                    })}
                </div>
            }

            <div className="search__results flex-col">
                <h1 className="result__title highlights__title">Popular Cities</h1>
                <PopularCities 
                handlePopularCities={(string) => props.handlePopularCities(string)} 
                items={props.items}
                setItems={props.setItems}/>
            </div>
        </div>
    )
}