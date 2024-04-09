import React, { lazy, Suspense } from 'react';

const LazyImageUpload = lazy(() => import('./ImageUpload'));

const ImageUpload = props => (
  <Suspense fallback={null}>
    <LazyImageUpload {...props} />
  </Suspense>
);

export default ImageUpload;
