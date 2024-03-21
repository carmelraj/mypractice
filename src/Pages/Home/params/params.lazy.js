import React, { lazy, Suspense } from 'react';

const LazyParams = lazy(() => import('./Params'));

const Params = props => (
  <Suspense fallback={null}>
    <LazyParams {...props} />
  </Suspense>
);

export default Params;
