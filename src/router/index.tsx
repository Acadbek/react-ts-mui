import { Home, Products } from '@/pages';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="<h1>Loader...</h1>">
            <Home />
          </Suspense>
        }
      />
      <Route
        path="products"
        element={
          <Suspense fallback="Loader...">
            <Products />
          </Suspense>
        }
      />
    </Routes>
  );
};
