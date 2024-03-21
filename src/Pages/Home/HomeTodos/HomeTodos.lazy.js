import React, { lazy, Suspense } from 'react';

const LazyHomeTodos = lazy(() => import('./HomeTodos'));

const HomeTodos = props => (
  <Suspense fallback={null}>
    <LazyHomeTodos {...props} />
  </Suspense>
);

export default HomeTodos;
