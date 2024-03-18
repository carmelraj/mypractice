import React, { lazy, Suspense } from 'react';

const LazyExcersieone = lazy(() => import('./Excersieone'));

const Excersieone = props => (
  <Suspense fallback={null}>
    <LazyExcersieone {...props} />
  </Suspense>
);

export default Excersieone;
