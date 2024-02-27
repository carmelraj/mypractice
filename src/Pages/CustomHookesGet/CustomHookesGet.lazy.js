import React, { lazy, Suspense } from 'react';

const LazyCustomHookesGet = lazy(() => import('./CustomHookesGet'));

const CustomHookesGet = props => (
  <Suspense fallback={null}>
    <LazyCustomHookesGet {...props} />
  </Suspense>
);

export default CustomHookesGet;
