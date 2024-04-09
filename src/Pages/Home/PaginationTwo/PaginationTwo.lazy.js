import React, { lazy, Suspense } from 'react';

const LazyPaginationTwo = lazy(() => import('./PaginationTwo'));

const PaginationTwo = props => (
  <Suspense fallback={null}>
    <LazyPaginationTwo {...props} />
  </Suspense>
);

export default PaginationTwo;
