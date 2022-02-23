import React from 'react';
import StyledCard from '../elements/StyledCard';
import SkeletonElement from './SkeletonElement';

export default function SkeletonHighlight() {
    return (
        <div className="skeletonhighlight__wrapper">
            <StyledCard className="wind__wrapper flex-col highlight__card">
                <SkeletonElement type="subtext" />
                <SkeletonElement type="title" />
                <SkeletonElement type="subtext" />
            </StyledCard>
            
        </div>
    )
}