import { Suspense } from "react";
import { Provider } from 'react-redux'
import { store } from "@/store";
import { Router } from "@/router";
import { BrowserRouter } from 'react-router-dom'

export const App = () => {
  console.log(store)

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Router />
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}
