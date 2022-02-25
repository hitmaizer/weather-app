import React from 'react'
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'
import { Reorder } from "framer-motion";


function Item(props) {
    
    
    return (
        <Reorder.Item value={props.item} id={props.item} >
            <div className="result__item flex-row" onClick={(string) => props.handlePopularCities(props.item)}>
                <p className="result__text">{props.item}</p>
                <ArrowIosForwardOutline size="24px" className="result__icon" />
            </div>
        </Reorder.Item>
        
    )
}

export default Item