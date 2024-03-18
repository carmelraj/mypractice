import React, { lazy, Suspense } from 'react';

const LazyExcersieThree = lazy(() => import('./ExcersieThree'));

const ExcersieThree = props => (
  <Suspense fallback={null}>
    <LazyExcersieThree {...props} />
  </Suspense>
);

export default ExcersieThree;
