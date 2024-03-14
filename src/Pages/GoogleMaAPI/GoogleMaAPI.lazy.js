import React, { lazy, Suspense } from 'react';

const LazyGoogleMaApi = lazy(() => import('./GoogleMaApi'));

const GoogleMaApi = props => (
  <Suspense fallback={null}>
    <LazyGoogleMaApi {...props} />
  </Suspense>
);

export default GoogleMaApi;
