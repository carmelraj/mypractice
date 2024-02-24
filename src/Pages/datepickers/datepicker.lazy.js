import React, { lazy, Suspense } from 'react';

const LazyDatepicker = lazy(() => import('./Datepicker'));

const Datepicker = props => (
  <Suspense fallback={null}>
    <LazyDatepicker {...props} />
  </Suspense>
);

export default Datepicker;
