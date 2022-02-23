import React from 'react';
import Shimmer from './Shimmer';
import SkeletonCard from './SkeletonCard';
import SkeletonElement from './SkeletonElement';
import SkeletonHighlight from './SkeletonHighlight';

export default function SkeletonMain() {
    return (
        <div className="skeletonmain__wrapper main__wrapper flex-col">
            <div className="skeletonmain__topbtns flex-row">
                <SkeletonElement type="btn" />
                <SkeletonElement type="btn" />
            </div>
            <div className="skeleton__forecast forecast__wrapper">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <Shimmer />
            </div>
            <SkeletonElement type="title"/>
            <div className="skeleton__highlights highlights__grid">
                <SkeletonHighlight  />
                <SkeletonHighlight />
                <SkeletonHighlight />
                <SkeletonHighlight />
                <Shimmer />
            </div>
        </div> 
    )
}