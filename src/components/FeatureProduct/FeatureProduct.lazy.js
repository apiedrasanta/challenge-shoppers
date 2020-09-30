import React, { lazy, Suspense } from 'react';

const LazyFeatureProduct = lazy(() => import('./FeatureProduct'));

const FeatureProduct = props => (
  <Suspense fallback={null}>
    <LazyFeatureProduct {...props} />
  </Suspense>
);

export default FeatureProduct;
