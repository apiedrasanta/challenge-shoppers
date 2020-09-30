import React, { lazy, Suspense } from 'react';

const LazyShopPicture = lazy(() => import('./ShopPicture'));

const ShopPicture = props => (
  <Suspense fallback={null}>
    <LazyShopPicture {...props} />
  </Suspense>
);

export default ShopPicture;
