import React, { lazy, Suspense } from 'react';

const LazyHomPage = lazy(() => import('./HomPage'));

const HomPage = props => (
  <Suspense fallback={null}>
    <LazyHomPage {...props} />
  </Suspense>
);

export default HomPage;
