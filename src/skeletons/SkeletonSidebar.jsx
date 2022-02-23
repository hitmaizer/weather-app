import React from 'react';
import SkeletonElement from './SkeletonElement';

export default function SkeletonSidebar() {
    return (
        <div className="sidebar__wrapper skeleton__sidebar flex-col">
            <div className="skeleton__sidebartop flex-row">
                <SkeletonElement type="btn" />
                <SkeletonElement type="btn" />
            </div>
            <SkeletonElement type="thumbnail"/>
            <SkeletonElement type="title"/>
            <SkeletonElement type="title"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="subtext"/>
        </div>
    )
}