import React, { lazy, Suspense } from 'react';

const LazySearchMultiFilter = lazy(() => import('./SearchMultiFilter'));

const SearchMultiFilter = props => (
  <Suspense fallback={null}>
    <LazySearchMultiFilter {...props} />
  </Suspense>
);

export default SearchMultiFilter;
