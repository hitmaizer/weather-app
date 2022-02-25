import React from 'react';
import { Reorder } from "framer-motion"
import Item from './Item'

const initialItems = ["London", "Berlin", "Paris", "Madrid", "Stockholm", "Helsinki", "Moscow"]

export default function PopularCities(props) {
    const [items, setItems] = React.useState(initialItems)

    return (
        <Reorder.Group axis="y" onReorder={setItems} values={items}>
          {items.map((item) => (
            <Item key={item} item={item} handlePopularCities={props.handlePopularCities} />
          ))}
        </Reorder.Group>
      );
}