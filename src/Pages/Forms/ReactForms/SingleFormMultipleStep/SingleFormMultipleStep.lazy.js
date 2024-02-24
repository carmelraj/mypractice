import React, { lazy, Suspense } from 'react';

const LazySingleFormMultipleStep = lazy(() => import('./SingleFormMultipleStep'));

const SingleFormMultipleStep = props => (
  <Suspense fallback={null}>
    <LazySingleFormMultipleStep {...props} />
  </Suspense>
);

export default SingleFormMultipleStep;
