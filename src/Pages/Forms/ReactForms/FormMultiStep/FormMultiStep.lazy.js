import React, { lazy, Suspense } from 'react';

const LazyFormMultiStep = lazy(() => import('./FormMultiStep'));

const FormMultiStep = props => (
  <Suspense fallback={null}>
    <LazyFormMultiStep {...props} />
  </Suspense>
);

export default FormMultiStep;
