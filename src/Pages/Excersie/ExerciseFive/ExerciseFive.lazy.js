import React, { lazy, Suspense } from 'react';

const LazyExerciseFive = lazy(() => import('./ExerciseFive'));

const ExerciseFive = props => (
  <Suspense fallback={null}>
    <LazyExerciseFive {...props} />
  </Suspense>
);

export default ExerciseFive;
