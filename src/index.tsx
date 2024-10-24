import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { NotFoundRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './routes/__root'
import { routeTree } from './routeTree.gen'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './util/store'

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => '404 Not Found',
})

const root = document.createElement("div")
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root)


const router = createRouter({
  routeTree,
  notFoundRoute
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

rootDiv.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
