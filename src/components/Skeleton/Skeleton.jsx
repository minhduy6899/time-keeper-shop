import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonImage = () => {
  return (
    <div style={{ width: '100%', margin: '1rem 0' }}>
      <SkeletonTheme color='#343a40' highlightColor='white'>
        <Skeleton height={180} />
        <div>
          <Skeleton height={20} width='100%' />
          <Skeleton height={20} width='100%' />
          <Skeleton height={20} width='100%' />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonImage;
