import React from 'react';
import { Reorder } from "framer-motion"
import Item from './Item'


export default function PopularCities(props) {
    
    return (
        <Reorder.Group axis="y" onReorder={props.setItems} values={props.items}>
          {props.items.map((item) => (
            <Item key={item} item={item} handlePopularCities={props.handlePopularCities} />
          ))}
        </Reorder.Group>
      );
}