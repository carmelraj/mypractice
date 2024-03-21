import React, { lazy, Suspense } from 'react';

const LazyAutoSearch = lazy(() => import('./AutoSearch'));

const AutoSearch = props => (
  <Suspense fallback={null}>
    <LazyAutoSearch {...props} />
  </Suspense>
);

export default AutoSearch;
