import React, { lazy, Suspense } from 'react';

const LazyReactFormHookesMui = lazy(() => import('./ReactFormHookesMui'));

const ReactFormHookesMui = props => (
  <Suspense fallback={null}>
    <LazyReactFormHookesMui {...props} />
  </Suspense>
);

export default ReactFormHookesMui;
