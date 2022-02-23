import React from 'react';
import StyledCard from '../elements/StyledCard';
import SkeletonElement from './SkeletonElement';

export default function SkeletonHighlight() {
    return (
        <div className="skeletonhighlight__wrapper">
            <StyledCard>
                <SkeletonElement type="text" />
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
            </StyledCard>
        </div>
    )
}