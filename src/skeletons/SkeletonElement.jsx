import React from 'react';
import ShimmerLight from './ShimmerLight';


export default function SkeletonElement(props) {
    const classes = `skeleton ${props.type}`
    return (
        <div className={classes}>
            <ShimmerLight  />
        </div>
    )
}