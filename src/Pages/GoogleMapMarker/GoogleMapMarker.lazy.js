import React, { lazy, Suspense } from 'react';

const LazyGoogleMapMarker = lazy(() => import('./GoogleMapMarker'));

const GoogleMapMarker = props => (
  <Suspense fallback={null}>
    <LazyGoogleMapMarker {...props} />
  </Suspense>
);

export default GoogleMapMarker;
