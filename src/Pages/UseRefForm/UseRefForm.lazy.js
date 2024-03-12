import React, { lazy, Suspense } from 'react';

const LazyUseRefForm = lazy(() => import('./UseRefForm'));

const UseRefForm = props => (
  <Suspense fallback={null}>
    <LazyUseRefForm {...props} />
  </Suspense>
);

export default UseRefForm;
