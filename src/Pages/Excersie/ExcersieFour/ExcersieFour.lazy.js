import React, { lazy, Suspense } from 'react';

const LazyExcersieFour = lazy(() => import('./ExcersieFour'));

const ExcersieFour = props => (
  <Suspense fallback={null}>
    <LazyExcersieFour {...props} />
  </Suspense>
);

export default ExcersieFour;
