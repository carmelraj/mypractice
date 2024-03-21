import React, { lazy, Suspense } from 'react';

const LazyHomeSearchFilter = lazy(() => import('./HomeSearchFilter'));

const HomeSearchFilter = props => (
  <Suspense fallback={null}>
    <LazyHomeSearchFilter {...props} />
  </Suspense>
);

export default HomeSearchFilter;
