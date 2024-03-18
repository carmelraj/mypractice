import React, { lazy, Suspense } from 'react';

const LazyExcersieTwo = lazy(() => import('./ExcersieTwo'));

const ExcersieTwo = props => (
  <Suspense fallback={null}>
    <LazyExcersieTwo {...props} />
  </Suspense>
);

export default ExcersieTwo;
