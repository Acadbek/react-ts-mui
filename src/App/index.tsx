import '@/styles/global.css'

import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { Router } from '@/router';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';


export const App = () => {
  const client = new QueryClient();
               
  return (
    <HelmetProvider>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
              <Router />
            </Suspense>
          </Provider>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
};
