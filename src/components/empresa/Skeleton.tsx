import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function Skeleton(): React.JSX.Element {

    return (
        <SkeletonPlaceholder borderRadius={4} backgroundColor='#3A4555' highlightColor='#4e5d73'>
            <SkeletonPlaceholder.Item width={'100%'} height={120} borderRadius={6} marginBottom={20}>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    )
}

export default Skeleton;