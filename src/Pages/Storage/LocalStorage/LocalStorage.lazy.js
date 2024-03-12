import React, { lazy, Suspense } from 'react';

const LazyLocalStorage = lazy(() => import('./LocalStorage'));

const LocalStorage = props => (
  <Suspense fallback={null}>
    <LazyLocalStorage {...props} />
  </Suspense>
);

export default LocalStorage;
