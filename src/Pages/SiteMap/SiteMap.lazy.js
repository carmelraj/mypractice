import React, { lazy, Suspense } from 'react';

const LazySiteMap = lazy(() => import('./SiteMap'));

const SiteMap = props => (
  <Suspense fallback={null}>
    <LazySiteMap {...props} />
  </Suspense>
);

export default SiteMap;
