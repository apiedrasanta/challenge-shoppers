import React, { lazy, Suspense } from 'react';

const LazySliderAside = lazy(() => import('./SliderAside'));

const SliderAside = props => (
  <Suspense fallback={null}>
    <LazySliderAside {...props} />
  </Suspense>
);

export default SliderAside;
