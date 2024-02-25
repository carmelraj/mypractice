import React, { lazy, Suspense } from 'react';

const LazyThrotelling = lazy(() => import('./Throtelling'));

const Throtelling = props => (
  <Suspense fallback={null}>
    <LazyThrotelling {...props} />
  </Suspense>
);

export default Throtelling;
