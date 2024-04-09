import React, { lazy, Suspense } from 'react';

const LazyPaginationThree = lazy(() => import('./PaginationThree'));

const PaginationThree = props => (
  <Suspense fallback={null}>
    <LazyPaginationThree {...props} />
  </Suspense>
);

export default PaginationThree;
