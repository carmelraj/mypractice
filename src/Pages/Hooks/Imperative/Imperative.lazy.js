import React, { lazy, Suspense } from 'react';

const LazyImperative = lazy(() => import('./Imperative'));

const Imperative = props => (
  <Suspense fallback={null}>
    <LazyImperative {...props} />
  </Suspense>
);

export default Imperative;
