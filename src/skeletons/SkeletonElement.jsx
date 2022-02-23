import React from 'react';


export default function SkeletonElement(props) {
    const classes = `skeleton ${props.type}`
    return (
        <div className={classes}>

        </div>
    )
}