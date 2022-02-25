import React from 'react'
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'
import { Reorder } from "framer-motion";
import Lottie from "lottie-react";
import animationData from './animation.json';
import styled from 'styled-components';


function Item(props) {
    return (
        <Reorder.Item value={props.item} id={props.item} >
            <div className="result__item flex-row" onClick={(string) => props.handlePopularCities(props.item)}>
                <div className="result__liked flex-row">
                    <p className="result__text">{props.item}</p>
                </div>
                <ArrowIosForwardOutline size="24px" className="result__icon" />
            </div>
        </Reorder.Item>
        
    )
}

export default Item