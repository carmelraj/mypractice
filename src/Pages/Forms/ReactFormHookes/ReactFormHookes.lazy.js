import React, { lazy, Suspense } from 'react';

const LazyReactFormHookes = lazy(() => import('./ReactFormHookes'));

const ReactFormHookes = props => (
  <Suspense fallback={null}>
    <LazyReactFormHookes {...props} />
  </Suspense>
);

export default ReactFormHookes;
