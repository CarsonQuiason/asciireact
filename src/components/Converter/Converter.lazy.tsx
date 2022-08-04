import React, { lazy, Suspense } from 'react';

const LazyConverter = lazy(() => import('./Converter'));

const Converter = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyConverter {...props} />
  </Suspense>
);

export default Converter;
