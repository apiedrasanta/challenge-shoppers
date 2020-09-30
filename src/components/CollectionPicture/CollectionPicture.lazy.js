import React, { lazy, Suspense } from 'react';

const LazyCollectionPicture = lazy(() => import('./CollectionPicture'));

const CollectionPicture = props => (
  <Suspense fallback={null}>
    <LazyCollectionPicture {...props} />
  </Suspense>
);

export default CollectionPicture;
