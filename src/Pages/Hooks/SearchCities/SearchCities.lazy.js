import React, { lazy, Suspense } from 'react';

const LazySearchCities = lazy(() => import('./SearchCities'));

const SearchCities = props => (
  <Suspense fallback={null}>
    <LazySearchCities {...props} />
  </Suspense>
);

export default SearchCities;
