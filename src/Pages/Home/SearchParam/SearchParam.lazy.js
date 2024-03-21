import React, { lazy, Suspense } from 'react';

const LazySearchParam = lazy(() => import('./SearchParam'));

const SearchParam = props => (
  <Suspense fallback={null}>
    <LazySearchParam {...props} />
  </Suspense>
);

export default SearchParam;
