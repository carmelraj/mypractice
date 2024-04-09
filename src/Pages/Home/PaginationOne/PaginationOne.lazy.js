import React, { lazy, Suspense } from 'react';

const LazyPaginationOne = lazy(() => import('./PaginationOne'));

const PaginationOne = props => (
  <Suspense fallback={null}>
    <LazyPaginationOne {...props} />
  </Suspense>
);

export default PaginationOne;
