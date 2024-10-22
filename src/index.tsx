import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { NotFoundRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './routes/__root'
import { routeTree } from './routeTree.gen'

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
    <RouterProvider router={router} />
  </React.StrictMode>
)
