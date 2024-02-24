import React, { lazy, Suspense } from 'react';

const LazyFormik = lazy(() => import('./Formik'));

const Formik = props => (
  <Suspense fallback={null}>
    <LazyFormik {...props} />
  </Suspense>
);

export default Formik;
