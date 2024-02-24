import React, { lazy, Suspense } from 'react';

const LazySearchFilter = lazy(() => import('./SearchFilter'));

const SearchFilter = props => (
  <Suspense fallback={null}>
    <LazySearchFilter {...props} />
  </Suspense>
);

export default SearchFilter;
