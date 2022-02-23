import React from 'react';
import StyledCard from '../elements/StyledCard'
import SkeletonElement from './SkeletonElement';

export default function SkeletonCard() {
    return (
        <div className="skeletoncard__wrapper">
            <StyledCard>
                <SkeletonElement type="title" />
                <SkeletonElement type="thumbnail" />
                <SkeletonElement type="text" />
            </StyledCard>
        </div>
    )
}